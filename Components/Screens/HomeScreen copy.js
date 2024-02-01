/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, FlatList, View, ScrollView, StyleSheet, Alert, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from './Loader';
const HomeScreen = (props) => {
    const [loading, setLoading] = useState(true);
    const dummyData = [
        { id: 1, title: 'Result Notification (Revaluation) :- M.A. Sociology (Final) M.A. Political Science (Final) Annual Examination 2023', url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230921115356.pdf', date: '16-04-2023' },
        { id: 2, title: 'अधिसूचना :- सत्र 2023-24 हेतु महाविद्यालयों में प्रवेश लिए जाने की तिथि में पुनः वृद्धि किये जाने विषयक |', url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230917060651.pdf', date: '16-04-2023' },
        { id: 3, title: ' पी-एच.डी. शोध उपाधि प्रवेश - 2023 (केवल यू.जी.सी.,सी.एस.आई.आर. नेट/सेट/जे.आर.एफ/सहायक प्राध्यापक (नियमित अथवा परिनियम-28 के अंतर्गत) हेतु) हेतु आवेदकों की पात्रता निर्धारण निर्धारण उपरांत सूची सहित संबंधित सूचना ', url: 'https://www.durguniversity.ac.in/web_data/uploads/files/20230912120028.pdf', date: '16-04-2023' }
    ];
    const data = [
        {
            sectionHeading: 'Syllabus',
            items: ['Engineering - Semester 1', 'Medicine - Year 2', 'Arts - Semester 3'],
        },
        {
            sectionHeading: 'Old Question Papers',
            items: ['Subject 1 - Year 2020', 'Subject 2 - Year 2019', 'Subject 3 - Year 2018'],
        },
        {
            sectionHeading: 'Exam TimeTable',
            items: ['News Item 1', 'News Item 2', 'News Item 3'],
        },
        {
            sectionHeading: 'Result',
            items: ['News Item 1', 'News Item 2', 'News Item 3'],
        },
        {
            sectionHeading: 'Exam Form Links',
            items: ['News Item 1', 'News Item 2', 'News Item 3'],
        },
        {
            sectionHeading: 'Enrollment Form Links',
            items: ['News Item 1', 'News Item 2', 'News Item 3'],
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
        // Scroll the FlatList to simulate marquee effect
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: currentIndex,
                animated: true,
            });
        }
    }, [currentIndex]);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (

        <ScrollView style={styles.container}>
            {/* LATEST UNIVERSITY NOTICE */}
            <Loader loading={loading} />
            <View style={styles.noticeContainer}>
                <Text style={styles.noticeHeading}>LATEST UNIVERSITY NOTICE</Text>
                <FlatList
                    ref={flatListRef}
                    data={dummyData}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handleDocumentDownload(item.url, item.title)}>
                            <Image source={require('../Image/new-blink.gif')} style={styles.noticeImage} />
                            <Text style={styles.noticeText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <TouchableOpacity
                    style={styles.viewAllButton}
                    onPress={() => {
                        props.navigation.navigate('UniversityNotice', { data: dummyData });
                    }}
                >
                    {/* <Image source={require('../Image/viewAll.gif')} style={styles.viewAllButtonImage} /> */}
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* IMPORTANT LINKS */}
            <View style={styles.linksContainer}>
                {/* <Image source={require('../Image/important.gif')} style={{ width: '100%', height: 55, marginBottom: 15 }} /> */}
                <Text style={styles.linksHeading}>IMPORTANT LINKS</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.linkItem}
                            onPress={() => {
                                props.navigation.navigate('ImportantSub', {
                                    selectedItems: item.items,
                                    title: item.sectionHeading,
                                });
                            }}
                        >
                            <Text style={styles.linkText}>{item.sectionHeading}</Text>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity onPress={() => {
                    setLoading(true);
                }}><Text>CHECK</Text></TouchableOpacity>
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
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        // flex: 3,
        height: 400
    },
    noticeHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 12,
        textTransform: 'uppercase',
    },
    noticeImage: {
        width: 80,
        height: 30,
        marginBottom: 10,
        alignSelf: 'center',
    },
    noticeText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    viewAllButton: {
        backgroundColor: '#501ae1',
        padding: 10,
        borderRadius: 5,
        width: 105,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    viewAllButtonImage: {
        width: 85,
        height: 25,
    },
    linksContainer: {
        padding: 10,
        // flex: 3,
        // marginBottom: 40,
        height: 200,
        // backgroundColor:'black',
    },
    linksHeading: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    linkItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 10,
        height: 100,
        justifyContent: 'center',
        textTransform: 'uppercase',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#501ae1',
    },
    linkText: {
        fontSize: 20,
        color: '#501ae1',
    },
});

export default HomeScreen;