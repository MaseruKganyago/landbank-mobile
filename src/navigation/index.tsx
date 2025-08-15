import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/login';
import InspectorDashboard from '../views/inspector-dashboard';
import AssessmentsScreen from '../views/assessments';
import AssessmentDetailsScreen from '../views/assessments/details';
import {
  EnvironmentalConditionsForm,
  FinalAssessmentForm,
  LandInfrastructureForm,
} from '../components';

export type AuthStackParamList = {
  Login: undefined;
  InspectorDashboard: undefined;
  AssessmentsScreen: undefined;
  AssessmentDetailsScreen: undefined;
  LandInfrastructureForm: undefined;
  EnvironmentalConditionsForm: undefined;
  FinalAssessmentForm: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#f8f9fa' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="InspectorDashboard" component={InspectorDashboard} />
      <Stack.Screen name="AssessmentsScreen" component={AssessmentsScreen} />
      <Stack.Screen
        name="AssessmentDetailsScreen"
        component={AssessmentDetailsScreen}
      />
      <Stack.Screen
        name="LandInfrastructureForm"
        component={LandInfrastructureForm}
      />
      <Stack.Screen
        name="EnvironmentalConditionsForm"
        component={EnvironmentalConditionsForm}
      />
      <Stack.Screen
        name="FinalAssessmentForm"
        component={FinalAssessmentForm}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
