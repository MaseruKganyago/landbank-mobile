import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../customIcon';
import { styles } from './styles';

interface IProps {
  hasPhoto?: boolean;
  isCamera?: boolean;
}

const PhotoUploadBox: FC<IProps> = ({ hasPhoto, isCamera = false }) => (
  <TouchableOpacity style={styles.photoUploadBox}>
    {isCamera ? (
      <CustomIcon name="camera-outline" size={30} color="#999" />
    ) : (
      <View style={styles.photoPlaceholder}>
        {!hasPhoto && <Text style={styles.photoX}>×</Text>}
      </View>
    )}
  </TouchableOpacity>
);

export default PhotoUploadBox;
