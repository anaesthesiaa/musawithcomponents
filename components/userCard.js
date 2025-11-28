import { View, Text, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Муза</Text>
          <Text style={styles.title}>Фея музыки и гармонии</Text>
          <Text style={styles.bio}>
            Выражаясь языком музыки, иногда я чувствую себя как маленькая нота,
            вписанная в сложное созвучие
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: "#636363",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});

export default UserCard;