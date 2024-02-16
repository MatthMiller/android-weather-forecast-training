import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const WeatherBottom = () => {
  return (
    <>
      <Image style={styles.map} source={require('../assets/images/map.jpg')} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Image
            style={styles.icon}
            source={require('../assets/icons/accuweather.png')}
          />
          <Text style={styles.buttonText}>AccuWeather</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Image
            style={styles.icon}
            source={require('../assets/icons/radar.png')}
          />
          <Text style={styles.buttonText}>AccuWeather</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WeatherBottom;

const styles = StyleSheet.create({
  map: {
    height: 209,
    width: '100%',
    borderRadius: 25,
    marginVertical: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 13,

    backgroundColor: '#40474D',
    borderRadius: 50,
  },
  icon: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#80D0FF',
  },
});
