import { FC, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomIcon, FormHeader, PhotoUploadBox } from '../../../..';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamList = {
  LandInfrastructureForm: undefined;
  AssessmentDetailsScreen: undefined;
};

type LandInfrastructureFormProps = NativeStackScreenProps<
  AuthStackParamList,
  'LandInfrastructureForm',
  'AssessmentDetailsScreen'
>;

export const LandInfrastructureForm: FC<LandInfrastructureFormProps> = ({
  navigation,
}) => {
  const [formData, setFormData] = useState({
    farmSize: '50 ha',
    arableLand: '',
    grazingLand: '',
    fallow: '',
    other: '',
    infrastructure: {
      fencing: true,
      boreholes: true,
      waterTanks: true,
      irrigationSystem: true,
      storageFacilities: false,
    },
  });

  const updateInfrastructure = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      infrastructure: {
        ...prev.infrastructure,
        [key]: value,
      },
    }));
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onBackPress = () => navigation.navigate('AssessmentDetailsScreen');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <FormHeader title="2 Land and Infrastructure" handleBack={onBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Farm Size Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Farm Size (ha):</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>{formData.farmSize}</Text>
            <CustomIcon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Land Use Breakdown Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Land Use Breakdown:</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Arable land:</Text>
            <TextInput
              style={styles.textInput}
              value={formData.arableLand}
              onChangeText={value => updateField('arableLand', value)}
              placeholder=""
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Grazing land:</Text>
            <TextInput
              style={styles.textInput}
              value={formData.grazingLand}
              onChangeText={value => updateField('grazingLand', value)}
              placeholder=""
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Fallow:</Text>
            <TextInput
              style={styles.textInput}
              value={formData.fallow}
              onChangeText={value => updateField('fallow', value)}
              placeholder=""
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Other:</Text>
            <TextInput
              style={styles.textInput}
              value={formData.other}
              onChangeText={value => updateField('other', value)}
              placeholder=""
            />
          </View>
        </View>

        {/* Infrastructure Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Infrastructure Checklist:</Text>

          <InfrastructureItem
            label="Fencing"
            value={formData.infrastructure.fencing}
            onValueChange={(value: any) =>
              updateInfrastructure('fencing', value)
            }
          />

          <InfrastructureItem
            label="Boreholes"
            value={formData.infrastructure.boreholes}
            onValueChange={(value: any) =>
              updateInfrastructure('boreholes', value)
            }
          />

          <InfrastructureItem
            label="Water tanks"
            value={formData.infrastructure.waterTanks}
            onValueChange={(value: any) =>
              updateInfrastructure('waterTanks', value)
            }
          />

          <InfrastructureItem
            label="Irrigation system"
            value={formData.infrastructure.irrigationSystem}
            onValueChange={(value: any) =>
              updateInfrastructure('irrigationSystem', value)
            }
          />

          <InfrastructureItem
            label="Storage facilities"
            value={formData.infrastructure.storageFacilities}
            onValueChange={(value: any) =>
              updateInfrastructure('storageFacilities', value)
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
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportButton}>
          <Ionicons name="warning" size={20} color="white" />
          <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const InfrastructureItem = ({ label, value, onValueChange }: any) => (
  <View style={styles.infrastructureItem}>
    <Text style={styles.infrastructureLabel}>{label}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#ddd', true: '#4A90E2' }}
      thumbColor={value ? '#ffffff' : '#f4f3f4'}
    />
  </View>
);

export default LandInfrastructureForm;
