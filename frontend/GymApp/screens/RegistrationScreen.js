import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { commonStyles } from '../style';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');

  const registerUser = () => {
    // Perform validations
    if (!name || !password || !email || !phoneNumber || !age) {
      // Check for non-null values
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    if (isNaN(phoneNumber) || isNaN(age)) {
      // Check if phoneNumber and age are numeric
      Alert.alert('Validation Error', 'Phone Number and Age must be numeric.');
      return;
    }

    if (phoneNumber.length !== 10) {
      // Check for 10-digit phone number
      Alert.alert('Validation Error', 'Phone Number must be exactly 10 digits.');
      return;
    }

    if (age.length !== 2) {
      // Check for 2-digit age
      Alert.alert('Validation Error', 'Age must be exactly 2 digits.');
      return;
    }

    // Email pattern check using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Invalid email address.');
      return;
    }

    // If all validations pass, proceed with registration
    const user = {
      name,
      password,
      email,
      phoneNumber,
      age,
    };

    axios
      .post('http://127.0.0.1:5000/users', user)
      .then((response) => {
        navigation.navigate('CreateWorkoutPlan', { username: response.data.name });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.heading}>User Registration</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Name*"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Password*"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Email*"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Phone Number*"
        value={phoneNumber}
        onChangeText={(text) => {
          // Allow only numbers and exactly 10 digits
          if (/^\d{0,10}$/.test(text)) {
            setPhoneNumber(text);
          }
        }}
        keyboardType="phone-pad"
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Age*"
        value={age}
        onChangeText={(text) => {
          // Allow only numbers and exactly 2 digits
          if (/^\d{0,2}$/.test(text)) {
            setAge(text);
          }
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={registerUser}
        style={commonStyles.createButton}
      >
        <Text style={commonStyles.createButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
