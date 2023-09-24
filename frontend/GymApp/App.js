import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import SignInScreen from './screens/SignInScreen';
import CreateWorkoutPlanScreen from './screens/CreateWorkoutPlanScreen';
import PlanCreatedScreen from './screens/PlanCreatedScreen';
import DisplayWorkoutPlanScreen from './screens/DisplayWorkoutPlanScreen';
import { commonStyles } from './style'; 
import { View, Text } from 'react-native';


const Stack = createStackNavigator();

const CommonHeader = () => {
  return (
    <View style={commonStyles.headerContainer}>
      <Text style={commonStyles.headerText}>HEALTH & FITNESS</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E74321',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: CommonHeader,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            header: CommonHeader,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            header: CommonHeader,
          }}
        />
        <Stack.Screen
          name="CreateWorkoutPlan"
          component={CreateWorkoutPlanScreen}
          options={{
            header: CommonHeader,
          }}
        />
        <Stack.Screen
          name="PlanCreated"
          component={PlanCreatedScreen}
          options={{
            header: CommonHeader,
          }}
        />
        <Stack.Screen
          name="DisplayWorkoutPlan"
          component={DisplayWorkoutPlanScreen}
          options={{
            header: CommonHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
