import React from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const { PRIMARY_COLOR, SECONDARY_COLOR, LIGHT_COLOR } = colors;

export default function WeatherDetails({ currentWeather }) {

  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View style={styles.weatherDetailsRowBox}>
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={35} color={ PRIMARY_COLOR } />
            <View>
              <Text style={styles.weatherDetailsTitle}>FEELS LIKE</Text>
              <Text style={styles.weatherDetailsDescription}>{ feels_like }</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsRowBox}>
        <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={35} color={ PRIMARY_COLOR } />
            <View>
              <Text style={styles.weatherDetailsTitle}>HUMIDITY</Text>
              <Text style={styles.weatherDetailsDescription}>{ humidity }</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.weatherDetailsRow}>
        <View style={styles.weatherDetailsRowBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="weather-windy" size={35} color={ PRIMARY_COLOR } />
            <View>
              <Text style={styles.weatherDetailsTitle}>WIND SPEED</Text>
              <Text style={styles.weatherDetailsDescription}>{ speed }</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsRowBox}>
        <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="speedometer" size={35} color={ PRIMARY_COLOR } />
            <View>
              <Text style={styles.weatherDetailsTitle}>PRESSURE</Text>
              <Text style={styles.weatherDetailsDescription}>{ pressure }</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  weatherDetails: {
    borderColor: LIGHT_COLOR,
    borderRadius: 25,
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 25,
    // 
    shadowColor: "#000",
    shadowOffset: {
  	  width: 0,
  	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
  weatherDetailsRowBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: LIGHT_COLOR,
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  weatherDetailsTitle: {
  },
  weatherDetailsDescription: {
    color: SECONDARY_COLOR
  }
})