import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import apolloClient from './client'
import SubscribePlanHome from './src/screens/payment/subscribe';
import PayPointHomeScreen from './src/screens/payment/point';
 
 
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>        
        <StatusBar style="auto" />
        <PayPointHomeScreen/>
        {/* <SubscribePlanHome/> */}
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
