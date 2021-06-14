import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
export default props => {
  const max = props.y > props.x ? props.y : props.x;
  const min = props.y < props.x ? props.y : props.x;
  console.warn(props);

  return (
    <Text style={Estilo.fontG}>
      {max === min
        ? `Os valores são iguais x: ${max} y: ${min}`
        : `O valor ${max} é maior que o valor ${min}!`}
    </Text>
  );
};
