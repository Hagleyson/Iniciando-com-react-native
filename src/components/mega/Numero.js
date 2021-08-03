import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Estilo from '../estilo';
export default ({numero}) => {
  return (
    <View style={styles.Container}>
      <Text style={[Estilo.txtG, styles.Num]}>{numero}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Num: {
    color: '#FFF',
  },
});
