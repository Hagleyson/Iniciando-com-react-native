import React from 'react';
import {Text} from 'react-native';

import Filho from './Membro';
import Estilo from '../estilo';
export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>Familia {props.familia}</Text>
      {props.children}
      <Text>__________________________________________________</Text>
    </>
  );
};
