import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { colors } from '../utils';

export default function UnitPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitPicker}>
      <Picker 
        selectedValue={ unitsSystem } 
        onValueChange={ (item) => setUnitsSystem(item) }
        mode="dialog">
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  )
}

const styles = {
  unitPicker: {
    width: 85, 
    borderRadius: 5,
    position: 'absolute',
    top: 39,
    right: 70,
  }
}