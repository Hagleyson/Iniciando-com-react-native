import React, {useCallback, useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default props => {
  const [number, setNumber] = useState(0);
  const incrementar = useCallback(() => {
    setNumber(number + 1);
  }, [setNumber, number]);
  const decrementar = useCallback(() => {
    setNumber(number - 1);
  }, [setNumber, number]);
  return (
    <>
      <Text style={Estilo.fontG}>{number}</Text>
      <Button title="+" onPress={incrementar} />
      <Button title="+" onPress={decrementar} />
    </>
  );
};
