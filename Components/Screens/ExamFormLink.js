/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { Linking } from 'react-native';

const ExamFormLink = ({ navigation }) => {
    const [animatedValue] = useState(new Animated.Value(1));
    const [buttonClicked, setButtonClicked] = useState([]);

    const examForms = [
        {
            label: 'SUPPLEMENTARY EXAM FORM 2023',
            url: 'https://durg.ucanapply.com/smartexam/public/',
        },
        // {
        //     label: 'Exam Form 2',
        //     url: 'http://example.com/exam-form-2',
        // },
        // Add more exam forms as needed
    ];

    const openLink = (url) => {
        Linking.openURL(url).catch((error) => {
            console.error(`Failed to open URL: ${url}`, error);
        });
    };

    const handlePress = (url, index) => {
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 0.8,
                duration: 100,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
        ]).start();

        setButtonClicked([...buttonClicked, index]);

        setTimeout(() => {
            openLink(url);
        }, 200);
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333', // Dark gray text
                marginBottom: 12,
                textTransform: 'uppercase',
                textAlign: 'center',
                borderRadius: 20,
                borderBottomColor: '#191970',
                borderBottomWidth: 5,
            }}>Exam Forms</Text>
            {examForms.map((form, index) => (
                <Animated.View
                    key={index}
                    style={{
                        transform: [{ scale: animatedValue }],
                        marginBottom: 16,
                    }}
                >
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 8,
                            backgroundColor: '#fff',
                            padding: 16,
                            elevation: 3, // Android shadow
                            shadowColor: '#000', // iOS shadow
                            shadowOffset: { width: 0, height: 2 }, // iOS shadow
                            shadowOpacity: 0.2, // iOS shadow
                            shadowRadius: 4, // iOS shadow
                        }}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 10, color: '#191970' }}>{form.label}</Text>
                        <TouchableOpacity
                            onPress={() => handlePress(form.url, index)}
                            style={{
                                backgroundColor: buttonClicked.includes(index) ? 'green' : '#191970',
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: 'white' }}>Open Form</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            ))}
        </View>
    );
};

export default ExamFormLink;
