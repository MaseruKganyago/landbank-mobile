import { FC, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import { CustomIcon, FormHeader } from '../../../..';

type AuthStackParamList = {
  EnvironmentalConditionsForm: undefined;
  FinalAssessmentForm: undefined;
  AssessmentsScreen: undefined;
};

type FinalAssessmentFormProps = NativeStackScreenProps<
  AuthStackParamList,
  'FinalAssessmentForm',
  'AssessmentsScreen'
>;

export const FinalAssessmentForm: FC<FinalAssessmentFormProps> = ({
  navigation,
}) => {
  const [hasSignature, setHasSignature] = useState(false);

  const handleSubmit = () => {
    if (!hasSignature) {
      Alert.alert(
        'Signature Required',
        'Please provide applicant signature before submitting.',
      );
      return;
    }

    Alert.alert(
      'Submit Assessment',
      'Are you sure you want to submit this assessment? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Submit',
          style: 'default',
          onPress: () => console.log('Assessment submitted'),
        },
      ],
    );
  };

  const handleSaveDraft = () => {
    Alert.alert(
      'Save Draft',
      'Assessment has been saved as draft. You can continue later.',
      [{ text: 'OK', onPress: () => console.log('Draft saved') }],
    );
  };

  const handleSignaturePad = () => {
    // This would open a signature capture component
    setHasSignature(true);
    console.log('Open signature pad');
  };

  const onBackPress = () => navigation.navigate('EnvironmentalConditionsForm');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6B9BD1" barStyle="light-content" />

      {/* Header */}
      <FormHeader title="Finalise Assessment" handleBack={onBackPress} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Information Alert */}
        <View style={styles.alertContainer}>
          <View style={styles.alertBox}>
            <View style={styles.alertHeader}>
              <View style={styles.infoIcon}>
                <CustomIcon name="information" size={16} color="white" />
              </View>
              <TouchableOpacity style={styles.closeButton}>
                <CustomIcon name="close" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.alertText}>
              Disclaimer: Submission of the signature serves as confirmation
              from the client that the agricultural inspection has been carried
              out and the findings have been recorded.
            </Text>
          </View>
        </View>

        {/* Applicant Signature Section */}
        <View style={styles.signatureSection}>
          <Text style={styles.signatureLabel}>Applicant Signature</Text>

          <TouchableOpacity
            style={[
              styles.signatureBox,
              hasSignature && styles.signatureBoxSigned,
            ]}
            onPress={handleSignaturePad}
          >
            {hasSignature ? (
              <View style={styles.signaturePlaceholder}>
                <Text style={styles.signatureText}>Signature Captured</Text>
                <CustomIcon name="checkmark-circle" size={24} color="#4CAF50" />
              </View>
            ) : (
              <View style={styles.signaturePlaceholder}>
                <CustomIcon name="create-outline" size={24} color="#999" />
                <Text style={styles.signaturePlaceholderText}>Tap to sign</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            !hasSignature && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!hasSignature}
        >
          <Text
            style={[
              styles.submitButtonText,
              !hasSignature && styles.submitButtonTextDisabled,
            ]}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveDraftButton}
          onPress={handleSaveDraft}
        >
          <Text style={styles.saveDraftButtonText}>Save Draft</Text>
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
    </SafeAreaView>
  );
};

export default FinalAssessmentForm;
