import React from 'react';
import { StatusBar } from 'expo-status-bar';
import EmaHomeScreen from './src/screens/EmaHomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <EmaHomeScreen />
    </>
  );
}
