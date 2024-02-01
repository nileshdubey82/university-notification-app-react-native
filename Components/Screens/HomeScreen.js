/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import Loader from './Loader';
import ExamFormLink from './ExamFormLink';
import EnrollmentFormLink from './EnrollmentFormLink';

const HomeScreen = props => {
    const enrollmentFormURL = 'https://durg.ucanapply.com/smartexam/public/'; // Replace with the actual URL
    const [loading, setLoading] = useState(false);

    const dummyData = [
        {
            id: 1,
            title:
                'Result Notification (Revaluation) :- M.A. Sociology (Final) M.A. Political Science (Final) Annual Examination 2023',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230921115356.pdf',
            date: '16-04-2023',
        },
        {
            id: 2,
            title:
                'अधिसूचना :- सत्र 2023-24 हेतु महाविद्यालयों में प्रवेश लिए जाने की तिथि में पुनः वृद्धि किये जाने विषयक |',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230917060651.pdf',
            date: '16-04-2023',
        },
        {
            id: 3,
            title:
                ' पी-एच.डी. शोध उपाधि प्रवेश - 2023 (केवल यू.जी.सी.,सी.एस.आई.आर. नेट/सेट/जे.आर.एफ/सहायक प्राध्यापक (नियमित अथवा परिनियम-28 के अंतर्गत) हेतु) हेतु आवेदकों की पात्रता निर्धारण निर्धारण उपरांत सूची सहित संबंधित सूचना ',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230912120028.pdf',
            date: '16-04-2023',
        },
        {
            id: 4,
            title:
                ' पी-एच.डी. शोध उपाधि प्रवेश - 2023 (केवल यू.जी.सी.,सी.एस.आई.आर. नेट/सेट/जे.आर.एफ/सहायक प्राध्यापक (नियमित अथवा परिनियम-28 के अंतर्गत) हेतु) हेतु आवेदकों की पात्रता निर्धारण निर्धारण उपरांत सूची सहित संबंधित सूचना ',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230912120028.pdf',
            date: '16-04-2023',
        },
        {
            id: 5,
            title:
                ' पी-एच.डी. शोध उपाधि प्रवेश - 2023 (केवल यू.जी.सी.,सी.एस.आई.आर. नेट/सेट/जे.आर.एफ/सहायक प्राध्यापक (नियमित अथवा परिनियम-28 के अंतर्गत) हेतु) हेतु आवेदकों की पात्रता निर्धारण निर्धारण उपरांत सूची सहित संबंधित सूचना ',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230912120028.pdf',
            date: '16-04-2023',
        },
        {
            id: 6,
            title:
                ' पी-एच.डी. शोध उपाधि प्रवेश - 2023 (केवल यू.जी.सी.,सी.एस.आई.आर. नेट/सेट/जे.आर.एफ/सहायक प्राध्यापक (नियमित अथवा परिनियम-28 के अंतर्गत) हेतु) हेतु आवेदकों की पात्रता निर्धारण निर्धारण उपरांत सूची सहित संबंधित सूचना ',
            url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230912120028.pdf',
            date: '16-04-2023',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleDocumentDownload = (url, title) => {
        console.log('Downloading:', title, 'from', url);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % dummyData.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: currentIndex,
                animated: true,
            });
        }
    }, [currentIndex]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

    return (
        <ScrollView style={styles.container}>
            <Loader loading={loading} />
            <View style={styles.noticeContainer}>
                <Text style={styles.noticeHeading}>LATEST UNIVERSITY NOTICE</Text>
                <FlatList
                    ref={flatListRef}
                    data={dummyData}
                    // showsVerticalScrollIndicator
                    // horizontal
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => handleDocumentDownload(item.url, item.title)} style={[styles.NoticeItem, { borderLeftColor: '#6ab187', borderLeftWidth: 5, borderRightColor: '#191970', borderRightWidth: 5, marginBottom: 10 }]} >
                            <Image
                                source={require('../Image/new-blink.gif')}
                                style={styles.noticeImage}
                            />
                            <Text style={styles.noticeText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                <TouchableOpacity
                    style={styles.viewAllButton}
                    onPress={() => {
                        props.navigation.navigate('UniversityNotice', { data: dummyData });
                    }}>
                    <Text style={styles.buttonText}>View All</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.linksHeading}>IMPORTANT LINKS</Text>
            <View style={styles.linksContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#6ab187', borderBottomWidth: 5 }]} onPress={() => {
                        // props.navigation.navigate(EnrollmentFormLink);
                        Linking.openURL(enrollmentFormURL);
                    }}>
                        <Ionicons name="document" size={40} color="#6ab187" />
                        <Text style={[styles.linkText, { color: '#6ab187' }]}>ENROLLMENT FORM </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#4cb5f5', borderBottomWidth: 5 }]} onPress={() => {
                        props.navigation.navigate(ExamFormLink);
                    }}>
                        <Ionicons name="list" size={40} color="#4cb5f5" />
                        <Text style={[styles.linkText, { color: '#4cb5f5' }]}>EXAM FORM </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#d32d41', borderBottomWidth: 5 }]}
                        onPress={() => {
                            props.navigation.navigate('ResultCate');
                        }}
                    >
                        <Ionicons name="school" size={40} color="#d32d41" />
                        <Text style={[styles.linkText, { color: '#d32d41' }]}>RESULT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#dba358', borderBottomWidth: 5 }]}>
                        <Ionicons name="calendar" size={40} color="#dba358" />
                        <Text style={[styles.linkText, { color: '#dba358' }]}>TIME TABLE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#20283e', borderBottomWidth: 5 }]}>
                        <Ionicons name="book" size={40} color="#20283e" />
                        <Text style={[styles.linkText, { color: '#20283e' }]}>SYLLABUS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#1c4e80', borderBottomWidth: 5 }]}>
                        <Ionicons name="newspaper" size={40} color="#1c4e80" />
                        <Text style={[styles.linkText, { color: '#1c4e80' }]}>OLD QUESTION PAPERS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.linkItem, { borderBottomColor: '#488a99', borderBottomWidth: 5 }]}>
                        <Ionicons name="link" size={40} color="#488a99" />
                        <Text style={[styles.linkText, { color: '#488a99' }]}>OTHER LINKS</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.linkItem}>
                        <Text style={styles.linkText}></Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    noticeContainer: {
        marginBottom: 24,
        backgroundColor: 'white', // Light gray background
        borderRadius: 10,
        padding: 10,
        height: height * 0.6, // 40% of the screen height
        shadowColor: 'gray',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10, // This adds a shadow on Android
    },
    noticeHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333', // Dark gray text
        marginBottom: 12,
        textTransform: 'uppercase',
        textAlign: 'center',
        borderRadius: 20,
        borderBottomColor: '#191970',
        borderBottomWidth: 5,
    },
    noticeImage: {
        width: 80,
        height: 30,
        marginBottom: 10,
        alignSelf: 'center',
    },
    noticeText: {
        color: '#333333',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    viewAllButton: {
        backgroundColor: '#191970',
        padding: 10,
        borderRadius: 5,
        width: 105,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    linksContainer: {
        marginBottom: 20,
        flexWrap: 'wrap',  // Allow items to wrap onto the next line
        flexDirection: 'row',  // Arrange items in a row
        justifyContent: 'space-between',  // Add space between items
        // backgroundColor: 'white',
    },
    linksHeading: {
        color: '#333333',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        // backgroundColor: 'white',
        borderRadius: 20,
        borderBottomColor: '#191970',
        borderBottomWidth: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    linkItem: {
        backgroundColor: 'white',
        // borderRadius: 10,
        marginHorizontal: 10,
        height: 100,
        width: width * 0.4,
        justifyContent: 'center',
        textTransform: 'uppercase',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#191970',
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.8, // Shadow opacity
        shadowRadius: 2, // Shadow radius
        elevation: 10, // This adds a shadow on Android
    },
    NoticeItem: {
        backgroundColor: 'white',
        // borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 10,
        // height: 100,
        width: '97.5%',
        justifyContent: 'center',
        textTransform: 'uppercase',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#191970',
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.8, // Shadow opacity
        shadowRadius: 2, // Shadow radius
        elevation: 10, // This adds a shadow on Android
    },
    linkText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default HomeScreen;
