import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import React from 'react';
import Quiz from '../Quiz';
import Result from '../Result';
const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}