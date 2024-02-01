/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default function FrontPage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 10,
                }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        HEMCHAND STUDENTS
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("Login");
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '',
                }}>
                <Image
                    source={require('../Image/first.png')}
                    style={{ width: 300, height: 250 }}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text
                    style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                    Easy To Use
                </Text>
                <Text
                    style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 15,
                        padding: 25,
                    }}>
                    Add Text here for some information Add Text here for some information
                    Add Text here for some information Add Text here for some information
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.nextButton} onPress={()=>{
                    props.navigation.navigate("Second");
                }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#501ae1',
        padding: 8,
    },
    nextButton: {
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});
