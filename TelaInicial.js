import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function TelaInicial(){
    const navigation = useNavigation();
    return (
    <View style={css.container}>
      {/* ---- CAFÉ DA MANHÃ ---- */}
      <Image source={require('./assets/logo_pouca_panca.png')} style={css.logo} />
      <Text style={css.titulo}>Bem vindo ao Pouca Pança</Text>
      <Text style={css.sub_titulo}>Alimentação</Text>
      <Image source={require('./assets/cafe_da_manha.png')} style={css.cafe_da_manha} />
      <Text style={css.refeicoes}>Café da Manhã</Text>
      <Text style={css.item} >Item</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Maça', value: 'maca' },
          { label: 'Banana', value: 'banana' },
          { label: 'Ovo Frito', value: 'ovo_frito' },
        ]}
      />
      <Text style={css.kcal} >Kcal</Text>
      <TextInput placeholder='Adicione a quantidade aqui' style={css.quantidade_kcal} />
      <TouchableOpacity style={css.botao}>
        <Text style={css.texto_botao} >Adicionar</Text>
      </TouchableOpacity>
  
      {/* ---- ALMOÇO ---- */}
      <Image source={require('./assets/almoço.png')} style={css.logo_almoço} />
      <Text style={css.almoço}>Almoço</Text>
      <Text style={css.item_2} >Item</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Arroz Branco', value: 'arroz_branco' },
          { label: 'Carne de Frango', value: 'carne_de_frango' },
          { label: 'Feijão Cozido', value: 'feijao' },
        ]}
      />
      <Text style={css.kcal} >Kcal</Text>
      <TextInput placeholder='Adicione a quantidade aqui' style={css.quantidade_kcal} />
      <TouchableOpacity style={css.botao}>
        <Text style={css.texto_botao} >Adicionar</Text>
      </TouchableOpacity>
  
      {/* ---- JANTAR ---- */}
      <Image source={require('./assets/jantar.png')} style={css.logo_jantar} />
      <Text style={css.jantar}>Jantar</Text>
      <Text style={css.item_3} >Item</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Batata Frita', value: 'batata_frita' },
          { label: 'Macarrão Alho e Óleo', value: 'macarrao_alho_e_oleo' },
          { label: 'Farofa', value: 'farofa' },
        ]}
      />
      <Text style={css.kcal} >Kcal</Text>
      <TextInput placeholder='Adicione a quantidade aqui' style={css.quantidade_kcal} />
      <TouchableOpacity style={css.botao}>
        <Text style={css.texto_botao} >Adicionar</Text>
      </TouchableOpacity>      
    </View>
    );
  }
  
  const css = StyleSheet.create({
    logo:{flex:1, position:'absolute', width:60, height:60, marginTop:30, marginLeft:10},
    titulo:{textAlign:'center', marginTop:25, fontSize:18},
    sub_titulo:{textAlign:'center', marginTop:9, fontWeight:'bold', fontSize:15},
    refeicoes:{fontWeight:'bold', marginLeft:90, paddingTop:35},
    cafe_da_manha:{flex:1, position:'absolute', width:60, height:70, marginTop:85, marginLeft:15},
    item:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15, paddingTop:10, marginBottom:-20},
    kcal:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15,marginBottom:-10},
    quantidade_kcal:{marginTop:20, height:30, backgroundColor:'#ffffff', marginLeft:15, marginRight:15},
    botao:{backgroundColor:'#13CE66', marginTop:10, marginLeft:15, marginRight:15, borderRadius:15, height:30},
    texto_botao:{textAlign:'center', marginTop:5, fontWeight:'bold'},
  
    logo_almoço:{flex:1, position:'absolute', width:60, height:60, marginTop:310, marginLeft:10},
    almoço:{fontWeight:'bold', marginLeft:90, paddingTop:30, marginBottom:-25},
    item_2:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15, marginTop:50, marginBottom:-20},
  
    logo_jantar:{flex:1, position:'absolute', width:60, height:60, marginTop:530, marginLeft:10},
    jantar:{fontWeight:'bold', marginLeft:90, paddingTop:30, marginBottom:-25},
    item_3:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15, paddingTop:35, marginBottom:-20},
  });