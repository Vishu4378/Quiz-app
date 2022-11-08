import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Conponent/Home';
import MyStack from './Conponent/Navigation';
import Quiz from './Conponent/Quiz';
import Result from './Conponent/Result';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {

  },
});
