import React from 'react';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Resultados from './Resultados';
import TelaInicial from './TelaInicial';

const Abas = createBottomTabNavigator({
  screens: {
    Início: TelaInicial,
    Resultado: Resultados,
  },
});

const Navigation = createStaticNavigation(Abas);

export default function App() {
  return <Navigation />
}