import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform } from 'react-native';

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocationValidationResult {
  isValid: boolean;
  distance: number;
  message: string;
}

export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    return true; // iOS permissions are handled automatically when requesting location
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This app needs access to your location to verify the assessment location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const getCurrentLocation = (): Promise<LocationCoordinates> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  });
};

// Simple geocoding using a free API (you might want to use a more robust service)
export const geocodeAddress = async (
  address: string,
): Promise<LocationCoordinates | null> => {
  try {
    // Using OpenStreetMap Nominatim API (free but has rate limits)
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`,
    );
    const data = await response.json();

    if (data && data.length > 0) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};

// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (
  coord1: LocationCoordinates,
  coord2: LocationCoordinates,
): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180);
  const dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.latitude * (Math.PI / 180)) *
      Math.cos(coord2.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

export const validateLocation = async (
  applicantAddress: string,
  maxDistanceKm: number = 0.5, // 500 meters tolerance
): Promise<LocationValidationResult> => {
  try {
    // Check location permission
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      return {
        isValid: false,
        distance: -1,
        message: 'Location permission is required to verify your location.',
      };
    }

    // Get current location
    const currentLocation = await getCurrentLocation();

    // Geocode the applicant address
    const applicantCoordinates = await geocodeAddress(applicantAddress);
    if (!applicantCoordinates) {
      return {
        isValid: false,
        distance: -1,
        message:
          'Unable to find the applicant address. Please check the address format.',
      };
    }

    // Calculate distance
    const distance = calculateDistance(currentLocation, applicantCoordinates);
    const isValid = distance <= maxDistanceKm;

    return {
      isValid,
      distance: Math.round(distance * 1000), // Convert to meters
      message: isValid
        ? `Location confirmed! You are ${Math.round(
            distance * 1000,
          )}m from the applicant address.`
        : `Location mismatch! You are ${Math.round(
            distance * 1000,
          )}m away from the applicant address. Please move closer (within ${
            maxDistanceKm * 1000
          }m).`,
    };
  } catch (error) {
    console.error('Location validation error:', error);
    return {
      isValid: false,
      distance: -1,
      message:
        'Failed to validate location. Please check your GPS settings and try again.',
    };
  }
};
