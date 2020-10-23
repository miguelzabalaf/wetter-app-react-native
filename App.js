import { StatusBar,  } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';

const WEATHER_API_KEY = 'a189893b662fdb9825ead862828a37d7';
const BASE_WHEATER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null)

  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load();
  }, [unitsSystem])

  const load = async() => {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMessage('Acces to location is needed to run the app');
        return
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      
      const wheatherUrl = `${BASE_WHEATER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(wheatherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }

    } catch (error) {
      
      setErrorMessage(error.message);

    }
  }

  if( currentWeather ) {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <WeatherInfo currentWeather={ currentWeather } />
        </View>
      </View>
    );

  } else {

    return (
      <View style={styles.container}>
        <Text>{ errorMessage }</Text>
        <StatusBar style="auto" />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  }
});
