import { ApolloProvider } from '@apollo/client';
import React from 'react';
import apolloClient from './client';
import Routes from './src/navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    console.log('Host Start', window.location.hostname, ':', window.location.origin);

    return (
        <ApolloProvider client={apolloClient}>
            <SafeAreaProvider>
                <Routes />
            </SafeAreaProvider>
        </ApolloProvider>
    );
}
