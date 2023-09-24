import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import axios from 'axios';
import { commonStyles } from '../style';

const CreateWorkoutPlanScreen = ({ navigation, route }) => {
  const { username } = route.params;

  const [goal, setGoal] = useState('');
  const [workoutSchedule, setWorkoutSchedule] = useState('7 Day Schedule');
  const [isModalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectWorkoutSchedule = (value) => {
    setWorkoutSchedule(value);
    toggleModal();
  };

  const createWorkoutPlan = () => {
    if (!goal || !workoutSchedule) {
      alert('Please fill in all mandatory fields (Goal and Workout Schedule).');
      return;
    }

    const workoutPlan = {
      username,
      goal,
      workoutSchedule,
      exercises,
    };

    axios
      .post('http://127.0.0.1:5000/workout-plans', workoutPlan)
      .then((response) => {
        navigation.replace('PlanCreated', { username });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Defining an array of days based on the selected workout schedule
  const selectedDays =
    workoutSchedule === '7 Day Schedule'
      ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      : workoutSchedule === '5 Day Schedule'
      ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      : ['Saturday', 'Sunday'];

  return (
    <ScrollView contentContainerStyle={commonStyles.container}>
      <Text style={commonStyles.heading}>Create Workout Plan</Text>
      <Text style={commonStyles.usernameText}>Username: {username}</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Goal*"
        value={goal}
        onChangeText={setGoal}
      />
      <View style={commonStyles.inputContainer}>
        <Text style={commonStyles.label}>Workout Schedule*:</Text>
        <TouchableOpacity onPress={toggleModal} style={commonStyles.picker}>
          <Text>{workoutSchedule}</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={commonStyles.modal}>
          <TouchableOpacity onPress={toggleModal} style={commonStyles.modalClose}>
            <Text>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectWorkoutSchedule('7 Day Schedule')} style={commonStyles.modalOption}>
            <Text>7 Day Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectWorkoutSchedule('5 Day Schedule')} style={commonStyles.modalOption}>
            <Text>5 Day Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectWorkoutSchedule('Weekend Schedule')} style={commonStyles.modalOption}>
            <Text>Weekend Schedule</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={commonStyles.subheading}>Exercises by Day:</Text>
      {selectedDays.map((day, index) => (
        <TextInput
          key={index}
          style={commonStyles.input}
          placeholder={`Exercises for ${day}`}
          value={exercises[day]}
          onChangeText={(text) =>
            setExercises((prevState) => ({ ...prevState, [day]: text }))
          }
        />
      ))}
      <TouchableOpacity
        onPress={createWorkoutPlan}
        style={commonStyles.createButton}
      >
        <Text style={commonStyles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateWorkoutPlanScreen;
