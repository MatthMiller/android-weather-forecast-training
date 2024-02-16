import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar style='light' />
      <Text style={styles.locationName}>Sorocaba, São Paulo</Text>
      <View style={styles.iconsContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/settings.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/refresh.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 21,
    color: '#F3F3F3',
    fontWeight: '500',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginRight: 8,
    gap: 18,
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default Header;
