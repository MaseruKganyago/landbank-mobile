import { FC } from 'react';
import { Switch, Text, View } from 'react-native';
import { styles } from './styles';

interface IProps {
  label: string;
  value: any;
  onValueChange: (Value: any) => void;
}

export const ToggleItem: FC<IProps> = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.toggleItem}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#ddd', true: '#4A90E2' }}
        thumbColor={value ? '#ffffff' : '#f4f3f4'}
      />
    </View>
  );
};

export default ToggleItem;
