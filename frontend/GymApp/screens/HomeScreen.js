import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'; 
import { commonStyles } from '../style';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./fitness.jpg')} 
      style={{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <Text
          style={commonStyles.heading}
        >
          Welcome to Health and Fitness
        </Text>
        <Text
          style={{
            fontSize: 17,
            marginBottom: 10,
            color: 'black', 
          }}
        >
          If you are an existing user, please sign in:
        </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignIn')}
          style={commonStyles.createButton} >
		  
          <Text style={commonStyles.createButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            marginBottom: 10,
            color: 'black', 
          }}
        >
          If you are a new user, please register:
        </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Registration')}
          style={commonStyles.createButton} 
        >
          <Text style={commonStyles.createButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
