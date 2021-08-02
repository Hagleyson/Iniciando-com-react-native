import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';
export default props => {
  return (
    <>
      <View style={styles.flexV3}>
        <Quadrado cor="#9bc9c8" lado={30} />
        <Quadrado cor="#3870e0" lado={40} />
        <Quadrado cor="#b638e0" lado={50} />
        <Quadrado cor="#ed24b1" lado={60} />
        <Quadrado cor="#eb3023" lado={70} />
        <Quadrado cor="#e8992a" lado={80} />
      </View>
      <View style={styles.flexV3}>
        <Quadrado cor="#9bc9c8" lado={30} />
        <Quadrado cor="#3870e0" lado={40} />
        <Quadrado cor="#b638e0" lado={50} />
        <Quadrado cor="#ed24b1" lado={60} />
        <Quadrado cor="#eb3023" lado={70} />
        <Quadrado cor="#e8992a" lado={80} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  flexV3: {
    width: '100%',
    margin: 10,
    height: 350,
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
});
