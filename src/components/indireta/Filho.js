import React from 'react';
import {Button} from 'react-native';
export default function Filho(props) {
  const gerar = () => {
    const aleatorio = Math.ceil(
      Math.random() * (props.max - props.min) + props.min,
    );
    return aleatorio;
  };

  return <Button title="Clicar" onPress={() => props.funcao(gerar())} />;
}
