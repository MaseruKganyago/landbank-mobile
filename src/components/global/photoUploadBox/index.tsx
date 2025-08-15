import { FC } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native';
import { launchCamera, launchImageLibrary, MediaType, ImagePickerResponse } from 'react-native-image-picker';
import CustomIcon from '../customIcon';
import { styles } from './styles';

interface IProps {
  hasPhoto?: boolean;
  isCamera?: boolean;
  photos?: string[];
  maxPhotos?: number;
  onAddPhoto?: (photoUri: string) => void;
  onRemovePhoto?: (index: number) => void;
  multiplePhotos?: boolean;
}

const PhotoUploadBox: FC<IProps> = ({ 
  hasPhoto, 
  isCamera = false, 
  photos = [], 
  maxPhotos = 5, 
  onAddPhoto, 
  onRemovePhoto,
  multiplePhotos = false 
}) => {
  const handleImagePicker = () => {
    Alert.alert(
      'Select Photo',
      'Choose how you want to add a photo:',
      [
        {
          text: 'Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Gallery',
          onPress: () => openGallery(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8 as any,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.assets && response.assets[0] && response.assets[0].uri) {
        onAddPhoto?.(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8 as any,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets && response.assets[0] && response.assets[0].uri) {
        onAddPhoto?.(response.assets[0].uri);
      }
    });
  };

  if (multiplePhotos) {
    return (
      <View style={styles.multiplePhotosContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {photos.map((photo, index) => (
            <View key={index} style={styles.photoItem}>
              <Image source={{ uri: photo }} style={styles.photoImage} />
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => onRemovePhoto?.(index)}
              >
                <Text style={styles.removeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
          ))}
          {photos.length < maxPhotos && (
            <TouchableOpacity 
              style={[styles.photoUploadBox, styles.addPhotoBox]} 
              onPress={handleImagePicker}
            >
              <CustomIcon name="camera-outline" size={30} color="#999" />
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.photoUploadBox} onPress={handleImagePicker}>
      {isCamera ? (
        <CustomIcon name="camera-outline" size={30} color="#999" />
      ) : (
        <View style={styles.photoPlaceholder}>
          {!hasPhoto && <Text style={styles.photoX}>×</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PhotoUploadBox;
