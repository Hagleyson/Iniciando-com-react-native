import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
// import Primeiro from './components/Primeiro';
// import Comp3, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/M-max';
// import Aleatorio from './components/DesafioAleatorio';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai2 from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
//import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
import ListaProdutosv2 from './components/produtos/ListaProdutosV2';
export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <ListaProdutosv2 />
      {/* <UsuarioLogado
        usuario={{nome: 'Hagleyson', email: 'Hagleyson@gmail.com'}}
      />
      <UsuarioLogado usuario={{nome: 'Hagleyson'}} />
      <UsuarioLogado usuario={{email: 'Hagleyson@gmail.com'}} />
      <UsuarioLogado usuario={{}} /> */}

      {/* <Familia familia="Fernandes">
        <Membro nome="Hagleyson " sobrenome="Fernandes" />
        <Membro nome="Alexsandra " sobrenome="Fernandes" />
      </Familia>
      <Familia familia="Leite">
        <Membro nome="Hagleyson " sobrenome="Fernandes" />
        <Membro nome="Alexsandra " sobrenome="Fernandes" />
      </Familia> */}
      {/*
  <Diferenciar />
      <ContadorV2 />

      <Pai2 />
      <Pai />
      <Contador />
      <Botao />
      <Aleatorio min={10} max={20} />
      <MinMax x={35} y={10} />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Primeiro />
      <Text>{1 + 5}</Text> */}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  App: {
    flexGrow: 1, //pode crescer
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
