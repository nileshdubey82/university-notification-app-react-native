/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const EnrollmentFormScreen = () => {
  const links = [
    {
      label: 'Enrollment Form 1',
      url: 'http://example.com/enrollment-form-1',
    },
    {
      label: 'Enrollment Form 2',
      url: 'http://example.com/enrollment-form-2',
    },
    // Add more links as needed
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Enrollment Forms</Text>
      {links.map((link, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => openLink(link.url)}
          style={{
            padding: 10,
            backgroundColor: '#007BFF',
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>{link.label}</Text>
        </TouchableOpacity>
      ))}
      {/* Add date and other details here */}
      <Text>Date: September 30, 2023</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default EnrollmentFormScreen;
