import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import { commonStyles } from '../style'; 

const PlanCreatedScreen = ({ navigation, route }) => {
  const { username } = route.params;

  const handleLogout = () => {
    // Implement logout logic here, e.g., flush any session data and navigate to the sign-in screen.
    // For now, just navigating to the 'Home' screen.
    navigation.navigate('Home');
  };

  const handleCreateAnotherPlan = () => {
    navigation.navigate('CreateWorkoutPlan', { username });
  };

  const handleViewWorkoutPlans = () => {
    navigation.navigate('DisplayWorkoutPlan', { username });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.heading}>Congrats, {username}!!! Plan Created</Text>
      <Text style={[commonStyles.subheading, { marginBottom: 20 }]}>Let's get started.</Text>
      <TouchableOpacity style={commonStyles.createButton} onPress={handleLogout}>
        <Text style={commonStyles.createButtonText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.createButton} onPress={handleCreateAnotherPlan}>
        <Text style={commonStyles.createButtonText}>Create Another Plan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.createButton} onPress={handleViewWorkoutPlans}>
        <Text style={commonStyles.createButtonText}>View Workout Plans</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanCreatedScreen;
