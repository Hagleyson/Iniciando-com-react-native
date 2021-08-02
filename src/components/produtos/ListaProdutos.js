import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>lista de produtos</Text>
      {produtos.map(p => {
        return (
          <Text style={Estilo.fontG} key={p.id}>
            {p.id}) {p.nome} tem preço de R$: {p.preco}
          </Text>
        );
      })}
    </>
  );
};
