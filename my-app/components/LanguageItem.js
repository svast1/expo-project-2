// LanguageItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ lang, logo }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.text}>{lang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 2, // Добавляет тень для Android
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10, // Круглые углы для логотипа
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LanguageItem;