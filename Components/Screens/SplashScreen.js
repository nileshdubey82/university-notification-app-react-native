/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000, // Animation duration in milliseconds
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => {
            // Once animation is complete, navigate to the next screen
            // navigation.replace('LoginScreen'); // Replace 'LoginScreen' with the name of your main screen
        });
    }, [navigation, scaleValue]);

    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#191970' />
            <View style={styles.background}>
                <Animated.Image
                    source={require('../Image/logo.png')}
                    style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191970', // Dark background color
    },
    background: {
        backgroundColor: '#191970', // Dark background color
        padding: 20, // Adjust as needed for spacing around the image
        borderRadius: 10, // Add some border radius for a rounded appearance
    },
    logo: {
        width: 200,
        height: 150,
    },
});

export default SplashScreen;
