import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface IProps {
  handleNavigation: () => void;
}

const DashboardActionCard: FC<IProps> = ({ handleNavigation }) => {
  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity style={styles.primaryCard} onPressIn={handleNavigation}>
        <View style={styles.cardContent}>
          <Text style={styles.primaryCardTitle}>Agri</Text>
          <Text style={styles.primaryCardSubtitle}>Assessment</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryCard}>
        <Text style={styles.secondaryCardText}>~~~~~~~</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryCard}>
        <Text style={styles.secondaryCardText}>~~~~~~~</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardActionCard;
