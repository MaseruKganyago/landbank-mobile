import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  REFRESH_TOKEN: 'refresh_token',
} as const;

export class StorageService {
  static async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error storing item with key ${key}:`, error);
      throw error;
    }
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error(`Error retrieving item with key ${key}:`, error);
      throw error;
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item with key ${key}:`, error);
      throw error;
    }
  }

  static async setObject<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error storing object with key ${key}:`, error);
      throw error;
    }
  }

  static async getObject<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error retrieving object with key ${key}:`, error);
      throw error;
    }
  }

  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  }

  static async getAllKeys(): Promise<readonly string[]> {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys:', error);
      throw error;
    }
  }
}

// Auth-specific storage utilities
export const AuthStorage = {
  async setToken(token: string): Promise<void> {
    return StorageService.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  async getToken(): Promise<string | null> {
    return StorageService.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async removeToken(): Promise<void> {
    return StorageService.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async setRefreshToken(token: string): Promise<void> {
    return StorageService.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  },

  async getRefreshToken(): Promise<string | null> {
    return StorageService.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  },

  async removeRefreshToken(): Promise<void> {
    return StorageService.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  },

  async setUserData<T>(userData: T): Promise<void> {
    return StorageService.setObject(STORAGE_KEYS.USER_DATA, userData);
  },

  async getUserData<T>(): Promise<T | null> {
    return StorageService.getObject<T>(STORAGE_KEYS.USER_DATA);
  },

  async removeUserData(): Promise<void> {
    return StorageService.removeItem(STORAGE_KEYS.USER_DATA);
  },

  async clearAll(): Promise<void> {
    await Promise.all([
      StorageService.removeItem(STORAGE_KEYS.AUTH_TOKEN),
      StorageService.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
      StorageService.removeItem(STORAGE_KEYS.USER_DATA),
    ]);
  },
};