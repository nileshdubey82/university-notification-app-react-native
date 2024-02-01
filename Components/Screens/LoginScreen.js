/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, StatusBar, Image, KeyboardAvoidingView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    navigation.navigate("Bottom");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar backgroundColor='#191970' />
      <View style={styles.header}>
        <Image
          source={require('../Image/logo.png')}
          style={{ width: 80, height: 110 }}
        />
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          Hemchand Yadav Vishwavidyalaya {'\n'}
          हेमचंद यादव विश्वविद्यालय, दुर्ग (छ.ग.)
        </Text>
        <Animatable.Text
          animation='pulse' easing='ease-out' iterationCount="infinite"
          style={{ fontSize: 27, fontWeight: 'bold', color: 'white', fontFamily: 'sans-serif' }}>
          {/* Animated Text */}
        </Animatable.Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Feather name="user" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
            value={email}
            placeholderTextColor={'black'}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(p) => setPass(p)}
            placeholderTextColor={'black'}
            secureTextEntry={true} // For password input
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Text style={{ color: '#191970', marginTop: 15 }}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={[styles.signIn, { borderColor: '#191970', borderWidth: 3, marginTop: 15 }]}>
          <Animatable.Text animation='pulse' easing='ease-in' iterationCount="infinite" style={[styles.textSign, { color: '#191970' }]}>
            Login
          </Animatable.Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={{ alignItems: 'center' }}>
          <Text style={[styles.textSign, { color: '#191970', fontSize: 14 }]}>Create new account</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    paddingHorizontal: 25,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 100,
  },
  footer: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : 1, // Platform.OS instead of Platform.a
    paddingLeft: 10,
    color: 'black',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
