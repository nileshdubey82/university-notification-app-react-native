/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './BottomScreen';
import FrontMain from '../Screens/MainFront';
import FrontFirst from '../Screens/FrontPage';
import FrontSecond from '../Screens/FrontPage2';
import FrontThird from '../Screens/FrontPage3';
import Login from '../Screens/LoginScreen';
import Registration from '../Screens/Registration';
import SplashScreen from '../Screens/SplashScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UniversityNotice from '../Screens/UniversityNotice';
import ImportantSub from '../Screens/ImportantSub';
import ReadFile from '../Screens/ReadFile';

import ExamFormLink from '../Screens/ExamFormLink';
import EnrollmentFormLink from '../Screens/EnrollmentFormLink';
import ResultCate from '../Screens/ResultCate';
const Stack = createNativeStackNavigator();

function App() {
    React.useEffect(() => {
        // Simulate an asynchronous operation (e.g., loading data, setting up resources)
        // This setTimeout is just for demonstration purposes, replace it with your actual loading logic
        setTimeout(() => {
            setLoading(false); // Set loading to false after your data is loaded or setup is complete
        }, 2000); // Simulate a 2-second loading time (adjust as needed)
    }, []);
    const [loading, setLoading] = React.useState(true);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#191970', // Set the header background color
                },
                headerTintColor: '#FFFFFF', // Set the header text color
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerShadowVisible: true,
            }}>
                {loading ?
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                        title: 'Login',
                        headerShown: false,
                    }} />
                    :
                    // Your main app content goes here
                    <Stack.Screen name="MainFront" component={FrontMain} options={{
                        title: 'APP NAME',
                        headerShown: false,
                    }} />
                }
                <Stack.Screen name="First" component={FrontFirst} options={{
                    title: 'HEMCHAND STUDENTS',
                    headerShown: false,
                }} />
                <Stack.Screen name="Second" component={FrontSecond} options={{
                    title: 'HEMCHAND STUDENTS',
                    headerShown: false,
                }} />
                <Stack.Screen name="Third" component={FrontThird} options={{
                    title: 'HEMCHAND STUDENTS',
                    headerShown: false,
                }} />
                <Stack.Screen
                    name="Bottom"
                    component={BottomTab}
                    options={({ navigation }) => ({
                        title: 'HEMCHAND STUDENTS',
                        headerShown: true,
                        headerLeft: () => <></>,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    alert("CHECK");
                                }}
                                style={{ marginRight: 16 }}
                            >
                                <Ionicons name="notifications" size={24} color="white" />
                            </TouchableOpacity>
                        ),
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'left',
                    })}

                />


                <Stack.Screen name="Login" component={Login} options={{
                    title: 'HEMCHAND STUDENTS',
                    headerShown: false,
                }} />
                <Stack.Screen name="Registration" component={Registration} options={{
                    title: 'Registration',
                    headerShown: true,
                }} />
                <Stack.Screen name="UniversityNotice" component={UniversityNotice} options={{
                    title: 'University Notice',
                    headerShown: true,
                }} />
                <Stack.Screen
                    name="ImportantSub"
                    component={ImportantSub}
                    options={({ route }) => ({
                        title: route.params.title, // Use the passed title as the screen title
                        // title: "Important Notice", // Use the passed title as the screen title
                        headerShown: true,
                    })}
                />
                <Stack.Screen name="ExamFormLink" component={ExamFormLink} options={{
                    title: 'Exam Form Link',
                    headerShown: true,
                }} />
                <Stack.Screen name="ReadFile" component={ReadFile} options={{
                    title: 'Read File',
                    headerShown: true,
                }} />
                <Stack.Screen name="EnrollmentFormLink" component={EnrollmentFormLink} options={{
                    title: 'Enrollment Form Link',
                    headerShown: true,
                }} />
                <Stack.Screen name="ResultCate" component={ResultCate} options={{
                    title: 'RESULT',
                    headerShown: true,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;