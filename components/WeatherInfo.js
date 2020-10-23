import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR, LIGHT_COLOR } = colors;


export default function WeatherInfo ({currentWeather}) {
  
  const { 
    main : { temp }, 
    weather: [ details ],
    name
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.WeatherInfo}>
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
      <Text style={styles.textPrimary}>{ temp }°</Text>
      <Text style={styles.textName}>{ name }</Text>
      <Text style={styles.weatherDescription}>{ description }</Text>
      <Text>{ main }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: 'center',
    display: 'flex',
    padding: 15,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize'
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontSize:  125,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 35,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: LIGHT_COLOR

  }
})