import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>lista de produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({item: p}) => {
          return (
            <Text>
              {p.id}) {p.nome} -- R$ {p.preco}
            </Text>
          );
        }}
      />
    </>
  );
};
