import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Estilo from '../estilo';
export default props => {
  return (
    <View style={style.Display}>
      <Text style={[Estilo.fontG, style.DisplayText]}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    width: 300,
    padding: 10,
  },
  DisplayText: {
    color: 'white',
  },
});
