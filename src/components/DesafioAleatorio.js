import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
export default ({max, min}) => {
  const aleatorio = Math.ceil(Math.random() * (max - min) + min);
  return (
    <Text style={Estilo.fontG}>
      Numero aleatório entre {min} e {max}: {aleatorio}
    </Text>
  );
};
