import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const cloudRaining = require('../assets/icons/grey_cloud_raining.png');
const cloud = require('../assets/icons/grey_cloud.png');
const forecastItems = [
  // time, icon, temperature, humidity, wind
  ['09:00', cloud, '23', '20', '11,1'],
  ['10:00', cloudRaining, '23', '53', '11,1'],
  ['11:00', cloudRaining, '24', '57', '11,1'],
  ['12:00', cloud, '24', '49', '11,1'],
  ['13:00', cloud, '24', '34', '13'],
  ['14:00', cloud, '23', '34', '13'],
  ['15:00', cloud, '23', '51', '14,8'],
  ['16:00', cloud, '23', '47', '14,8'],
  ['17:00', cloudRaining, '23', '16', '13'],
  ['18:00', cloudRaining, '22', '16', '13'],
  ['19:00', cloud, '22', '16', '11,1'],
];

const WeatherForecast = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>QUINTA-FEIRA, 15 DE FEVEREIRO</Text>
      <Text style={styles.subtitle}>Atualizado agora</Text>

      <ScrollView nestedScrollEnabled={true} style={styles.scrollForecast}>
        {forecastItems.map((actualItem) => {
          return (
            <View key={actualItem[0]} style={styles.scrollItem}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{actualItem[0]}</Text>
                <Image source={actualItem[1]} style={styles.itemIcon}></Image>
                <Text style={styles.itemText}>{actualItem[2]}°</Text>
                <Text style={styles.itemText}>{actualItem[3]}</Text>
              </View>
              <Text style={styles.itemText}>{actualItem[4]} km/h</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Mais detalhes sobre o clima</Text>
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
    paddingTop: 24,
    paddingBottom: 18,

    elevation: 2,
    shadowColor: '#000000',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F3F3F3',
  },
  subtitle: {
    marginTop: 4,
    color: '#C1C5C8',
    fontSize: 14,
    lineHeight: 14,
  },
  scrollForecast: {
    height: 225,
    marginTop: 36,
    marginBottom: 14,
  },
  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    gap: 24,
  },
  itemIcon: {
    height: 20,
    width: 20,
  },
  itemText: {
    color: '#F3F3F3',
    fontWeight: '400',
    fontSize: 16,
  },
  button: {
    paddingVertical: 11,
    paddingHorizontal: 24,
    backgroundColor: '#4EBDFF',
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#001725',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default WeatherForecast;
