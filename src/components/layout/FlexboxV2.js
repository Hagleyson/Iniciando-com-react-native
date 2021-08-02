import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';
export default props => {
  return (
    <View style={styles.flexV2}>
      <Quadrado cor="#9bc9c8" />
      <Quadrado cor="#3870e0" />
      <Quadrado cor="#b638e0" />
      <Quadrado cor="#ed24b1" />
      <Quadrado cor="#eb3023" />
      <Quadrado cor="#e8992a" />
    </View>
  );
};
const styles = StyleSheet.create({
  flexV2: {
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
