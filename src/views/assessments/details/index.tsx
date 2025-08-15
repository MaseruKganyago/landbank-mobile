import React, { FC } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { CustomIcon, FormHeader } from '../../../components';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  AssessmentDetailsScreen: undefined;
  LandInfrastructureForm: undefined;
  AssessmentsScreen: undefined;
};

type AssessmentDetailsScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'AssessmentDetailsScreen',
  'LandInfrastructureForm'
>;

export const AssessmentDetailsScreen: FC<AssessmentDetailsScreenProps> = ({
  navigation,
}) => {
  const applicantData = {
    address: '54 Marine Drive',
    applicantName: 'Ms Rosa Malindi',
    applicantNumber: 'RHs37445',
    entityRegNo: '2346-4961-4437',
  };

  const onBackPress = () => navigation.navigate('AssessmentsScreen');
  const onCheckIn = () => navigation.navigate('LandInfrastructureForm');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <FormHeader title="1 Form & Applicant Details" handleBack={onBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressHeader}>
            <TouchableOpacity style={styles.favoriteButton}>
              <CustomIcon name="heart" size={20} color="#E74C3C" />
            </TouchableOpacity>
            <Text style={styles.addressText}>{applicantData.address}</Text>
          </View>
        </View>

        {/* Applicant Details */}
        <View style={styles.detailsSection}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Applicant Name:</Text>
            <Text style={styles.detailValue}>
              {applicantData.applicantName}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Applicant Number:</Text>
            <Text style={styles.detailValue}>
              {applicantData.applicantNumber}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Entity Reg No:</Text>
            <Text style={styles.detailValue}>{applicantData.entityRegNo}</Text>
          </View>
        </View>

        {/* Confirm Location Text */}
        <View style={styles.confirmLocationSection}>
          <Text style={styles.confirmLocationText}>Confirm Location</Text>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          {/* Map Background */}
          <View style={styles.mapBackground}>
            {/* Street lines */}
            <View style={[styles.streetLine, styles.horizontalStreet1]} />
            <View style={[styles.streetLine, styles.horizontalStreet2]} />
            <View style={[styles.streetLine, styles.horizontalStreet3]} />
            <View style={[styles.streetLine, styles.verticalStreet1]} />
            <View style={[styles.streetLine, styles.verticalStreet2]} />
            <View style={[styles.streetLine, styles.yellowStreet]} />

            {/* Green area (park/field) */}
            <View style={styles.greenArea} />

            {/* Location markers */}
            <View style={styles.redMarker}>
              <CustomIcon name="location" size={24} color="#E74C3C" />
            </View>
            <View style={styles.blueMarker}>
              <View style={styles.blueDot} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Check-in Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.checkinButton} onPressIn={onCheckIn}>
          <Text style={styles.checkinButtonText}>Check-in</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <CustomIcon name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportButton}>
          <CustomIcon name="warning" size={20} color="white" />
          <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default AssessmentDetailsScreen;
