import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#81D4FA',
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: '#000000',
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2
  },
  buttonText: {
    fontSize: 45
  }
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Quiz', { resetCount: 0, resetAQ: 0 })
        }
      >
        <Text style={styles.buttonText}> Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
