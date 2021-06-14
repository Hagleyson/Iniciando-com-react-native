import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

function Comp1() {
  return <Text style={Estilo.fontG}>Comp #01</Text>;
}

function Comp2() {
  return <Text style={Estilo.fontG}>Comp #02</Text>;
}

export default function Comp3() {
  return <Text style={Estilo.fontG}>Comp #03</Text>;
}
export {Comp1, Comp2};
