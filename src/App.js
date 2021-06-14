import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Primeiro from './components/Primeiro';
// import Comp3, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/M-max';
// import Aleatorio from './components/DesafioAleatorio';
import Botao from './components/Botao';
export default function App() {
  return (
    <View style={style.App}>
      <Botao />

      {/* 
      <Aleatorio min={10} max={20} />
      <MinMax x={35} y={10} />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Primeiro />
      <Text>{1 + 5}</Text> */}
    </View>
  );
}
const style = StyleSheet.create({
  App: {
    flexGrow: 1, //pode crescer
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
