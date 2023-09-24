import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { commonStyles } from '../style';

const DisplayWorkoutPlanScreen = ({ route, navigation }) => {
  const { username } = route.params;
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [expandedPlanId, setExpandedPlanId] = useState(null);

  useEffect(() => {
    // Fetch workout plans for the given username from the API
    axios
      .get(`http://127.0.0.1:5000/workout-plans/${username}`)
      .then((response) => {
        if (response.data && typeof response.data === 'object') {
          const workoutPlansArray = Object.values(response.data);
          setWorkoutPlans(workoutPlansArray);
        } else {
          console.error('Invalid response format:', response.data);
          setWorkoutPlans([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching workout plans:', error);
        setWorkoutPlans([]);
      });
  }, [username]);

  const toggleExercises = (planId) => {
    // Toggle the expand/collapse state for a specific plan
    if (expandedPlanId === planId) {
      setExpandedPlanId(null);
    } else {
      setExpandedPlanId(planId);
    }
  };

  const handleLogOut = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={commonStyles.container}>
      <Text style={commonStyles.subheading}>Workout Plans for {username}</Text>
      {workoutPlans.length === 0 ? (
        <Text>No workout plans found for this user.</Text>
      ) : (
        workoutPlans.map((plan, index) => (
          <View key={index} style={commonStyles.workoutPlanWrapper}>
            <View style={commonStyles.workoutPlanContainer}>
              <Text>Goal: {plan.goal}</Text>
              <Text>Workout Schedule: {plan.workoutSchedule}</Text>
              <TouchableOpacity onPress={() => toggleExercises(plan.id)}>
                <Text style={commonStyles.toggleText}>
                  {expandedPlanId === plan.id ? ' Exercises -' : ' Exercises +'}
                </Text>
              </TouchableOpacity>
              {expandedPlanId === plan.id && (
                <View style={commonStyles.exercisesContainer}>
                  {Object.entries(plan.exercises).map(([day, exercise], dayIndex) => (
                    <Text key={dayIndex}>{day}: {exercise}</Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        ))
      )}
      <TouchableOpacity
        style={commonStyles.createButton}
        onPress={() => navigation.navigate('CreateWorkoutPlan', { username })}
      >
        <Text style={commonStyles.createButtonText}>Create Workout Plan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.createButton}
        onPress={handleLogOut}
      >
        <Text style={commonStyles.createButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DisplayWorkoutPlanScreen;
