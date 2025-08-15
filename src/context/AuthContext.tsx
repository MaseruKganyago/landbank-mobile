import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  login: (userInfo: any) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const TOKEN_KEY = 'xDFcxiooPQxazdndDsdRSerWQPlincytLDCarcxVxv';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
      if (storedToken) {
        setTokenState(storedToken);
      }
    } catch (error) {
      console.error('Error loading token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setToken = async (newToken: string | null) => {
    try {
      if (newToken) {
        await AsyncStorage.setItem(TOKEN_KEY, newToken);
      } else {
        await AsyncStorage.removeItem(TOKEN_KEY);
      }
      setTokenState(newToken);
    } catch (error) {
      console.error('Error storing token:', error);
    }
  };

  const login = async (userInfo: any) => {
    console.log('userInfo :>> ', userInfo);
    const results = await axios.post(
      'https://awesome-api-testawesome.shesha.app/api/TokenAuth/Authenticate',
      userInfo,
    );

    console.log('results :>> ', results);
    await setToken(results?.data?.result?.accessToken);
  };

  const logout = async () => {
    await setToken(null);
  };

  const value: AuthContextType = {
    token,
    setToken,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
