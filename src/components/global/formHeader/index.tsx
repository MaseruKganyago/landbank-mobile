import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../customIcon';
import { styles } from './styles';

interface IProps {
  title: string;
  handleBack: () => void;
}

export const FormHeader: FC<IProps> = ({ title, handleBack }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <CustomIcon name="chevron-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default FormHeader;
