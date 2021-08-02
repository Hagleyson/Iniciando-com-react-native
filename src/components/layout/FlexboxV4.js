import React from 'react';
import {View, StyleSheet} from 'react-native';
export default props => {
  return (
    <View style={style.flexV4}>
      <View style={style.v0} />
      <View style={style.v1} />
      <View style={style.v2} />
    </View>
  );
};
const style = StyleSheet.create({
  flexV4: {
    flex: 1,
    width: 100,
    backgroundColor: '#000',
  },
  v0: {
    height: 100,
  },
  v1: {
    backgroundColor: '#ff801a',
    flex: 1,
  },
  v2: {backgroundColor: '#dd22c1', flex: 1},
});
