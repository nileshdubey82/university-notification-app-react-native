/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import he from 'he';
import { Picker } from '@react-native-picker/picker';
import Loader from './Loader';
const TriviaPage = () => {
  const [triviaData, setTriviaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('26'); // Default category
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy'); // Default difficulty
  const [selectedAmount, setSelectedAmount] = useState('10'); // Default amount

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${selectedAmount}&category=${selectedCategory}&difficulty=${selectedDifficulty}`
        );
        const data = await response.json();
        if (data.results) {
          setTriviaData(data.results);
          setSelectedQuestion(0);
        } else {
          console.error('Error fetching trivia data:', data);
        }
      } catch (error) {
        console.error('Error fetching trivia data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, selectedDifficulty, selectedAmount]);

  const toggleAnswer = (questionIndex) => {
    setSelectedQuestion(
      questionIndex === selectedQuestion ? null : questionIndex
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Loader loading={loading} />
      <Text style={styles.title}>प्रश्न</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Select a Category:</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}>
          <Picker.Item label="All Categories" value="" />
          <Picker.Item label="General Knowledge" value="9" />
          <Picker.Item label="Entertainment: Books" value="10" />
          <Picker.Item label="Entertainment: Film" value="11" />
          <Picker.Item label="Entertainment: Music" value="12" />
          <Picker.Item label="Entertainment: Musicals & Theatres" value="13" />
          <Picker.Item label="Entertainment: Television" value="14" />
          <Picker.Item label="Entertainment: Video Games" value="15" />
          <Picker.Item label="Entertainment: Board Games" value="16" />
          <Picker.Item label="Science & Nature" value="17" />
          <Picker.Item label="Science: Computers" value="18" />
          <Picker.Item label="Science: Mathematics" value="19" />
          <Picker.Item label="Mythology" value="20" />
          <Picker.Item label="Sports" value="21" />
          <Picker.Item label="Geography" value="22" />
          <Picker.Item label="History" value="23" />
          <Picker.Item label="Politics" value="24" />
          <Picker.Item label="Art" value="25" />
          <Picker.Item label="Celebrities" value="26" />
          <Picker.Item label="Animals" value="27" />
          <Picker.Item label="Vehicles" value="28" />
          <Picker.Item label="Entertainment: Comics" value="29" />
          <Picker.Item label="Science: Gadgets" value="30" />
          <Picker.Item
            label="Entertainment: Japanese Anime & Manga"
            value="31"
          />
          <Picker.Item label="Entertainment: Cartoon & Animations" value="32" />
        </Picker>
        <Text style={styles.filterLabel}>Select Difficulty:</Text>
        <Picker
          selectedValue={selectedDifficulty}
          onValueChange={(itemValue) => setSelectedDifficulty(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
        <Text style={styles.filterLabel}>Select Amount:</Text>
        <Picker
          selectedValue={selectedAmount}
          onValueChange={(itemValue) => setSelectedAmount(itemValue)}
          style={styles.picker}>
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
        </Picker>
      </View>
      {triviaData ? (
        <View style={{ top: 50, bottom: 50 }}>
          {triviaData.map((question, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.questionText}>
                {he.decode(question.question)}
              </Text>
              {selectedQuestion === index && (
                <Text style={styles.answerText}>
                  सही उत्तर: {question.correct_answer}
                </Text>
              )}
              <Button
                title={
                  selectedQuestion === index ? 'उत्तर छिपाएं' : 'उत्तर दिखाएं'
                }
                onPress={() => toggleAnswer(index)}
                color={selectedQuestion === index ? '#f44336' : '#4caf50'}
              />
            </View>
          ))}
        </View>
      ) : (
        <Loader loading={true} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  filterContainer: {
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555555',
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
  questionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555555',
  },
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4caf50',
  },
});

export default TriviaPage;
