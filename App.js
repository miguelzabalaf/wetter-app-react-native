import { StatusBar,  } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitPicker from './components/UnitPicker';
import { colors } from './utils';
import ReloadIcon from './components/ReloadIcon';
import WeatherDetails from './components/WeatherDetails';

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
    setCurrentWeather(null);
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
          <ReloadIcon handleLoad={ load }/>
          <UnitPicker unitsSystem={ unitsSystem } setUnitsSystem={ setUnitsSystem } />
          <WeatherInfo currentWeather={ currentWeather } />
        </View>
        <WeatherDetails currentWeather={ currentWeather } />
      </View>
    );

  } else if (errorMessage) {

    return (
      <View style={styles.container}>
        <Text>{ errorMessage }</Text>
        <StatusBar style="auto" />
      </View>
    );

  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={ colors.PRIMARY_COLOR }/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF'
  },
  main: {
    justifyContent: 'center',
    flex: 1,
    minWidth: '100%',
  }
});
