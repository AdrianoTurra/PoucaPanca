import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  return (
    <View style={css.container}>
      <StatusBar style="auto" />
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
      

    </View>
  );
}

const css = StyleSheet.create({
  logo:{flex:1, position:'absolute', width:60, height:60, marginTop:30, marginLeft:10},
  titulo:{textAlign:'center', marginTop:25, fontSize:18},
  sub_titulo:{textAlign:'center', marginTop:10, fontWeight:'bold', fontSize:15},
  refeicoes:{fontWeight:'bold', marginLeft:90, paddingTop:35},
  cafe_da_manha:{flex:1, position:'absolute', width:60, height:70, marginTop:90, marginLeft:15},
  item:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15, paddingTop:20, marginBottom:-10},
  kcal:{fontWeight:'bold', color:'#A5B0BE', marginLeft:15,marginBottom:-10},
});