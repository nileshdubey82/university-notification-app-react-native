/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../Screens/ProfileScreens'
import StudyQuotesPage from '../Screens/StudyQuotesPage';

const Tab = createMaterialBottomTabNavigator();

export default function Bottom() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (route.name === 'StudyQuotesPage') {
                        iconName = focused ? 'bulb' : 'bulb-outline';
                    }

                    return <Ionicons name={iconName} size={20} color={color} />;
                },
            })}
            initialRouteName="Home"
            activeColor="white"
            inactiveColor="#FFFFFF"
            barStyle={{
                backgroundColor: '#191970',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                overflow: 'hidden',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="StudyQuotesPage" component={StudyQuotesPage} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    plusButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#191970', // Customize the background color of the plus button
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});
