import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './projects/gettingstarted/Index'

export default function App() {
  return (
    <View>
      <Index/>
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
