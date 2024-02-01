/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfileScreen = () => {
    const [dynamicQuote, setDynamicQuote] = React.useState('');

    React.useEffect(() => {
        const fetchDynamicQuote = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random');
                const data = await response.json();
                setDynamicQuote(data.content);
            } catch (error) {
                console.error('Error fetching dynamic quote:', error);
            }
        };

        fetchDynamicQuote();
    }, []);
    return (
        <View style={styles.container}>
            <View style={{ height: 200, width: '100%', borderBottomColor: "", backgroundColor: '#191970', borderBottomEndRadius: 100, borderBottomStartRadius: 100 }}>

            </View>
            <View style={styles.profileCard}>
                <View style={styles.profileImage}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://dl.dropboxusercontent.com/s/zsv1c7228uvp30g/Hemchand%20Yadav%20Vishwavidyalaya%2C%20Durg%2Clogo%2Cmm.png',
                        }}
                    />

                </View>
                <Text style={styles.userName}>Nilesh Dubey</Text>
                <Text style={{ color: 'black', textTransform: 'uppercase', }}> ──  quotes of the day  ──</Text>
                <Text style={styles.userEmail}>{dynamicQuote}</Text>
            </View>
            <View style={styles.userDetails}>
                <Text style={styles.detailHeading}>User Details</Text>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Age:</Text>
                    <Text style={styles.detailValue}>28</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Location:</Text>
                    <Text style={styles.detailValue}>Rishab Prime City Durg</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    profileCard: {
        backgroundColor: '#fff',
        padding: 20,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        position: 'absolute',
        top: 100,
    },
    profileImage: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc', // You can add an actual image source here
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: 'black',
    },
    userDetails: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'flex-start',
        elevation: 5,
        top: 200,
    },
    detailHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    detailItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    detailValue: {
        fontSize: 16,
        color: 'black',
        marginLeft: 5,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default UserProfileScreen;
