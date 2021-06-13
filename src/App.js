import React from 'react';
import {View, Text} from 'react-native';
import Primeiro from './components/primeiro';
export default function App() {
  return (
    <View>
      <Primeiro />
      <Text>{1 + 5}</Text>
    </View>
  );
}
