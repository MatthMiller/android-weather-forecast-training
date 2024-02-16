import { ScrollView, StyleSheet, Text } from 'react-native';
import Header from './Components/Header';
import WeatherIntro from './Components/WeatherIntro';
import WeatherForecast from './Components/WeatherForecast';
import WeatherBottom from './Components/WeatherBottom';

export default function App() {
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <Header />
      <WeatherIntro />
      <WeatherForecast />
      <WeatherBottom />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C1F',
    paddingHorizontal: 15,
  },
});
