import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageItem from './components/LanguageItem';
import javascriptLogo from './assets/javascript.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';
import cLogo from './assets/c.png';
import swiftLogo from './assets/swift.png';

const langs = [
  { id: '1', lang: 'JavaScript', logo: javascriptLogo },
  { id: '2', lang: 'Python', logo: pythonLogo },
  { id: '3', lang: 'Java', logo: javaLogo },
  { id: '4', lang: 'C++', logo: cLogo },
  { id: '5', lang: 'Swift', logo: swiftLogo },
];

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Языки программирования</Text>
      <FlatList
        data={langs}
        renderItem={({ item }) => <LanguageItem lang={item.lang} logo={item.logo} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Обо мне</Text>
      <Text style={styles.text}>
        Привет! Я веб-разработчик. Люблю создавать красивые и удобные приложения. 😊
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'Обо мне' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2', // Цвет заголовка
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#333333',
  },
});
