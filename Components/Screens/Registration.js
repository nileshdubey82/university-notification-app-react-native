/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import React, { useState } from 'react';
import LottieView from 'lottie-react-native';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // Handle registration logic here
    // You can access the form values using 'name', 'email', 'mobile', and 'password' states
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex:1
      }}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#191970' />
        <LottieView
          source={require('../Image/registration.json')}
          autoPlay
          loop
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.heading}>REGISTRATION</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="numeric"
            placeholderTextColor={'black'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'black'}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password" 
            value={cpassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={'black'}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegistration}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10, // Added border radius for a rounded look
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'black',
  },
  registerButton: {
    backgroundColor: '#191970',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Registration;
