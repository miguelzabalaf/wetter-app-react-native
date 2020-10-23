import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils';

export default function ReloadIcon({ handleLoad }) {
  return (
    <TouchableOpacity 
      style={styles.reloadIcon}
      onPress={ handleLoad }
      >
      <AntDesign name="reload1" size={25} color={colors.PRIMARY_COLOR} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reloadIcon: {
    width: 40, 
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: colors.PRIMARY_COLOR,
    position: 'absolute',
    top: 43,
    right: 15
  }
})