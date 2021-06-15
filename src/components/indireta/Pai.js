import React, {useState} from 'react';
import {Text} from 'react-native';
import Filho from './Filho';
import Estilo from '../estilo';
export default props => {
  const [num, setNum] = useState(0);
  const exibirValor = function (valor) {
    setNum(valor);
  };
  return (
    <>
      <Text style={Estilo.fontG}>{num}</Text>
      <Filho min={10} max={40} funcao={exibirValor} />
    </>
  );
};
