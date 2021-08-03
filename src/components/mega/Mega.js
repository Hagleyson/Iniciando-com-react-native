import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './Numero';
export default class Mega extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdeNumeros: props.qtdeNumeros || 10,
      numeros: [],
    };
    this.alterarQtdeNumeros = this.alterarQtdeNumeros.bind(this);
  }
  alterarQtdeNumeros(qtde) {
    this.setState({qtdeNumeros: +qtde});
  }
  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };
  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };
  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumero key={num} numero={num} />;
    });
  };
  render() {
    <Mega qtdeNumeros={7} />;
    return (
      <>
        <Text style={Estilo.fontG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={texto => this.alterarQtdeNumeros(texto)}
        />
        <Button title="gerar" onPress={this.gerarNumeros} />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '10%',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
