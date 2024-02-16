import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const WeatherIntro = () => {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.temperature}>23°</Text>
        <View style={styles.verticalBar}></View>
        <View style={styles.maxMinTemperature}>
          <Text style={styles.regularText}>24°</Text>
          <Text style={[styles.regularText, styles.greyText]}>19°</Text>
        </View>
      </View>

      <View style={styles.midInfo}>
        <Text style={styles.regularText}>Nublado</Text>
        <Text style={styles.regularText}>RealFeel 22°</Text>
        <View style={styles.textWithCircle}>
          <Text style={styles.regularText}>Qualidade do ar: Regular (28)</Text>
          <View style={styles.airCircle}></View>
        </View>
      </View>

      <View style={styles.horizontalBar}></View>

      <View style={styles.bottomInfo}>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonInfo}>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/icons/humidity.png')}
          />
          <Text style={styles.buttonText}>82%</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonInfo}>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/icons/rain_mm.png')}
          />
          <Text style={styles.buttonText}>0 mm</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonInfo}>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/icons/wind.png')}
          />
          <Text style={styles.buttonText}>11 km</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C3137',
    borderRadius: 25,
    marginTop: 18,

    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 25,

    // Box-shadow Android
    elevation: 2,
    shadowColor: '#000000',
  },
  top: {
    flexDirection: 'row',
    gap: 10,
  },
  maxMinTemperature: {
    justifyContent: 'space-between',
    paddingBottom: 5, // Ajuste tamanho da barra
  },
  verticalBar: {
    height: '90%', // // Ajuste tamanho da barra
    width: 1.5,
    backgroundColor: '#454A50',
  },
  temperature: {
    fontSize: 58,
    lineHeight: 57,
    color: '#F3F3F3',
  },
  regularText: {
    fontSize: 16,
    lineHeight: 16,
    color: '#F3F3F3',
  },
  greyText: {
    color: '#C1C5C8',
  },
  midInfo: {
    marginTop: 16,
    rowGap: 10,
  },
  textWithCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  airCircle: {
    height: 8,
    width: 8,
    borderRadius: 10,
    backgroundColor: '#FBD648',
  },
  horizontalBar: {
    height: 1,
    width: '100%',
    backgroundColor: '#454A50',
    marginVertical: 26,
  },
  bottomInfo: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonInfo: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 13,

    backgroundColor: '#40474D',
    borderRadius: 50,
  },
  buttonIcon: {
    height: 20,
    width: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#80D0FF',
  },
});

export default WeatherIntro;
