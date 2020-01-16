import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 5
  },
  text: {
    fontSize: 40,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '76%',
    marginTop: 90
  }
});
export default ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      YOU SCORED: {JSON.stringify(navigation.getParam('correctAns'))} out of 4
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Quiz', { resetCount: 0, resetAQ: 0 })}
    >
      <Text style={styles.text}> Play Again </Text>
    </TouchableOpacity>
  </View>
);
