import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import apolloClient from './client';
import Routes from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import PayPointHomeScreen from './src/screens/payment/point';
import { Button, Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <SafeAreaProvider>
                <Routes />
            </SafeAreaProvider>
        </ApolloProvider>
    );
}
