import { StyleSheet, Image } from 'react-native';

const Avatar = () => {
  return (
    <Image
        style={styles.avatar}
        source={{
          uri: "https://citaty.info/files/portraits/muza.jpeg",
        }}
    />
  );
};

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
      },
});

export default Avatar;