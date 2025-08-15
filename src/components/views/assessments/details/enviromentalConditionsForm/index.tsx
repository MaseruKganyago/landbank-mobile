import { FC, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  CustomIcon,
  FormHeader,
  PhotoUploadBox,
  ToggleItem,
  OtpModal,
} from '../../../..';
import { styles } from './styles';

type AuthStackParamList = {
  EnvironmentalConditionsForm: undefined;
  LandInfrastructureForm: undefined;
  FinalAssessmentForm: undefined;
};

type EnvironmentalConditionsFormProps = NativeStackScreenProps<
  AuthStackParamList,
  'EnvironmentalConditionsForm',
  'LandInfrastructureForm'
>;

export const EnvironmentalConditionsForm: FC<
  EnvironmentalConditionsFormProps
> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    environmentalRisks: {
      drought: true,
      flooding: true,
      soilErosion: true,
      pestsAndDiseases: true,
      marketAccess: false,
      infrastructure: true,
    },
    soilType: 'Red Sand',
    waterAvailability: {
      boreholes: true,
      riverStreams: true,
      municipalOnly: false,
    },
  });

  const [showOtpModal, setShowOtpModal] = useState(false);

  const updateEnvironmentalRisk = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      environmentalRisks: {
        ...prev.environmentalRisks,
        [key]: value,
      },
    }));
  };

  const updateWaterAvailability = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      waterAvailability: {
        ...prev.waterAvailability,
        [key]: value,
      },
    }));
  };

  const onBackPress = () => navigation.navigate('LandInfrastructureForm');

  const handleNextPress = () => {
    setShowOtpModal(true);
  };

  const handleOtpSuccess = () => {
    navigation.navigate('FinalAssessmentForm');
  };

  const handleCloseModal = () => {
    setShowOtpModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <FormHeader title="3 Environmental Conditions" handleBack={onBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Environmental Risks Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Environmental Risks (Check all that apply):
          </Text>

          <ToggleItem
            label="Drought"
            value={formData.environmentalRisks.drought}
            onValueChange={value => updateEnvironmentalRisk('drought', value)}
          />

          <ToggleItem
            label="Flooding"
            value={formData.environmentalRisks.flooding}
            onValueChange={value => updateEnvironmentalRisk('flooding', value)}
          />

          <ToggleItem
            label="Soil Erosion"
            value={formData.environmentalRisks.soilErosion}
            onValueChange={value =>
              updateEnvironmentalRisk('soilErosion', value)
            }
          />

          <ToggleItem
            label="Pests & Diseases"
            value={formData.environmentalRisks.pestsAndDiseases}
            onValueChange={value =>
              updateEnvironmentalRisk('pestsAndDiseases', value)
            }
          />

          <ToggleItem
            label="Market Access"
            value={formData.environmentalRisks.marketAccess}
            onValueChange={value =>
              updateEnvironmentalRisk('marketAccess', value)
            }
          />

          <ToggleItem
            label="Infrastructure (Roads/Transport)"
            value={formData.environmentalRisks.infrastructure}
            onValueChange={value =>
              updateEnvironmentalRisk('infrastructure', value)
            }
          />
        </View>

        {/* Soil Type Dropdown */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{formData.soilType}</Text>
            <CustomIcon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Water Availability Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Water Availability</Text>

          <ToggleItem
            label="Boreholes"
            value={formData.waterAvailability.boreholes}
            onValueChange={value => updateWaterAvailability('boreholes', value)}
          />

          <ToggleItem
            label="River/streams"
            value={formData.waterAvailability.riverStreams}
            onValueChange={value =>
              updateWaterAvailability('riverStreams', value)
            }
          />

          <ToggleItem
            label="Municipal only"
            value={formData.waterAvailability.municipalOnly}
            onValueChange={value =>
              updateWaterAvailability('municipalOnly', value)
            }
          />
        </View>

        {/* Upload Photo Section */}
        <View style={styles.section}>
          <Text style={styles.uploadTitle}>Upload Photo for each item</Text>

          <View style={styles.photoUploadContainer}>
            <PhotoUploadBox hasPhoto={false} />
            <PhotoUploadBox hasPhoto={false} />
            <PhotoUploadBox isCamera={true} />
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <CustomIcon name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportButton}>
          <CustomIcon name="warning" size={20} color="white" />
          <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>
      </View>

      {/* OTP Modal */}
      <OtpModal
        visible={showOtpModal}
        onClose={handleCloseModal}
        onSuccess={handleOtpSuccess}
      />
    </SafeAreaView>
  );
};

export default EnvironmentalConditionsForm;
