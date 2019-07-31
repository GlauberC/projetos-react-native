import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Img from './LicaoA/Img'
import Blink from './LicaoB/Blink'
import Estilo from './LicaoC/Estilo'

export default function App() {
  return (
    <View style={styles.container}>
        <Estilo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
