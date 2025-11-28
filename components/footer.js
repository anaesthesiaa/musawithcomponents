import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2025 Мое приложение</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 10,
    backgroundColor: '#fff', 
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555', 
  },
});

export default Footer;