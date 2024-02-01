/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const ImportantSub = ({ route }) => {
  const { selectedItems } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={require('../Image/new-blink.gif')}
              style={{ width: 80, height: 30 }}
            /><Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ImportantSub;
