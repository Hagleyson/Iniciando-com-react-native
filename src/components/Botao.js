import React, {useCallback} from 'react';
import {Button} from 'react-native';

export default props => {
  const handleClick = useCallback(() => {
    console.warn('Deu certo!');
  }, []);
  return <Button title="Executar!" onPress={handleClick} />;
};
