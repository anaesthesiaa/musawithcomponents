import {View, Text, StyleSheet, Pressable} from 'react-native';

const Button = () => {
    return (
        <View style={styles.boxBtn}>
            <Pressable style={styles.subBtn}>
                <Text style={styles.txtBtn}>Подписаться</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    subBtn: {
        backgroundColor: "#C71585",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      txtBtn: {
        color: "white",
        fontSize: 16,
      },
});

export default Button;