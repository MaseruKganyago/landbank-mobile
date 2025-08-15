import React, { FC } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { CustomIcon, DashboardActionCard } from '../../components';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  InspectorDashboard: undefined;
  AssessmentsScreen: undefined;
};

type InspectorDashboardScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'InspectorDashboard',
  'AssessmentsScreen'
>;

const InspectorDashboard: FC<InspectorDashboardScreenProps> = ({
  navigation,
}) => {
  const handleNavigateToAssessmentsScreen = () => {
    navigation.navigate('AssessmentsScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <CustomIcon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.profileIcon}>
          <CustomIcon name="person" size={24} color="white" />
        </View>
      </View>

      {/* User Info Section */}
      <View style={styles.userSection}>
        <Text style={styles.userName}>Yohannes Libelo</Text>
        <Text style={styles.userRole}>Landbank Inspector</Text>
      </View>

      {/* Dashboard Content */}
      <View style={styles.dashboardSection}>
        <Text style={styles.dashboardTitle}>Inspector Dashboard</Text>

        {/* Action Cards */}
        <DashboardActionCard
          handleNavigation={handleNavigateToAssessmentsScreen}
        />
      </View>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

export default InspectorDashboard;
