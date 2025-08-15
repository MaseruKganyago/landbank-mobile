import { FC } from 'react';
import CustomIcon from '../../../global/customIcon';
import { Text, TouchableOpacity, View } from 'react-native';
import { IReferenceListItem } from '../../../../interfaces/referencelist';
import { styles } from './styles';

export interface IAssessment {
  id: number;
  time: string;
  loanApplication: string;
  address: string;
  status: IReferenceListItem;
  action: IReferenceListItem;
}

interface IProps {
  assessment: IAssessment;
  handlePress: () => void;
}

export const AssessmentCard: FC<IProps> = ({ assessment, handlePress }) => {
  return (
    <View style={styles.assessmentCard}>
      <View style={styles.cardContent}>
        <View style={styles.leftSection}>
          <Text style={styles.timeText}>{assessment.time}</Text>
          <View style={styles.locationIcon}>
            <CustomIcon name="location-outline" size={20} color="#ccc" />
          </View>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.loanTitle}>Loan Application</Text>
          <Text style={styles.loanNumber}>{assessment.loanApplication}</Text>
          <Text style={styles.addressText}>{assessment.address}</Text>
        </View>

        <View style={styles.rightSection}>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: assessment.status?.color },
            ]}
          >
            <Text style={styles.statusText}>{assessment.status?.item}</Text>
          </View>

          <TouchableOpacity style={styles.actionButton} onPressIn={handlePress}>
            <Text
              style={[styles.actionText, { color: assessment?.action?.color }]}
            >
              {assessment?.action?.item}
            </Text>
            <CustomIcon
              name="chevron-forward"
              size={16}
              color={assessment?.action?.color}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AssessmentCard;
