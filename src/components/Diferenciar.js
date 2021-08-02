import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';
export default props => {
  return (
    <Text style={Estilo.fontG}>
      {Platform.OS === 'android' ? 'Android' : 'IOS'}
    </Text>
  );
};
