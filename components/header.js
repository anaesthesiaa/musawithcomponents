import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Мой профиль</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 15,
    backgroundColor: '#fff', 
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;