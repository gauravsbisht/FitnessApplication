import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import { commonStyles } from '../style'; // Import the common styles

const SignInScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signInMessage, setSignInMessage] = useState('');

  const handleSignIn = async () => {
    if (!username || !password) {
      setSignInMessage('Username and password are mandatory.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/signin', {
        username,
        password,
      });

      if (response.data === 'Valid') {
        navigation.navigate('DisplayWorkoutPlan', { username });
      } else {
        setSignInMessage('Not a valid user. Please register.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registration');
  };

  return (
    <ImageBackground
      source={require('./fitness.jpg')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
      }}
    >
      <View style={commonStyles.container}>
        <Text style={commonStyles.heading}>Sign In Screen</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Username*"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={commonStyles.input}
          placeholder="Password*"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity 
          onPress={handleSignIn}
          style={commonStyles.createButton}
        >
          <Text style={commonStyles.createButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={handleRegister}
          style={commonStyles.createButton} >
          <Text style={commonStyles.createButtonText}>Register</Text>
        </TouchableOpacity>
		<Text style={commonStyles.message}>{signInMessage}</Text>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;
