import { FC } from 'react';
import CustomIcon from '../../components/global/customIcon';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IAssessment } from '../../interfaces/assessment';
import { styles } from './styles';
import { AssessmentCard } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  AssessmentsScreen: undefined;
  AssessmentDetailsScreen: undefined;
};

type AssessmentsScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'AssessmentsScreen',
  'AssessmentDetailsScreen'
>;

export const AssessmentsScreen: FC<AssessmentsScreenProps> = ({
  navigation,
}) => {
  const assessments: IAssessment[] = [
    {
      id: 1,
      time: '10:00 AM',
      loanApplication: '#LB-2025-00045',
      address: '84 Marine drive, Route Q8',
      status: { item: 'Not Started', color: '#888' },
      action: { item: 'Start Assessment', color: '#4A90E2' },
    },
    {
      id: 2,
      time: '1:00 PM',
      loanApplication: '#LB-2025-37892',
      address: '45 Creswell Ave, Bloemfontein',
      status: { item: 'Completed', color: '#4CAF50' },
      action: { item: 'View Assessment', color: '#4A90E2' },
    },
  ];

  const onAssessmentCardPress = () =>
    navigation.navigate('AssessmentDetailsScreen');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <CustomIcon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agriculture Assessments</Text>
      </View>

      {/* Date Banner */}
      <View style={styles.dateBanner}>
        <Text style={styles.dateText}>Tuesday, November 1</Text>
      </View>

      {/* Assessments List */}
      <ScrollView
        style={styles.assessmentsList}
        showsVerticalScrollIndicator={false}
      >
        {assessments.map(assessment => (
          <AssessmentCard
            key={assessment.id}
            assessment={assessment}
            handlePress={onAssessmentCardPress}
          />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

export default AssessmentsScreen;
