import {View, Text, StyleSheet} from 'react-native';

const Skills = () => {
    return (
        <View style={styles.skills}>
          <Text style={styles.txtSkills}>Звуковые волны</Text>
          <Text style={styles.txtSkills}>Гиперэмпатия</Text>
          <Text style={styles.txtSkills}>Танец и движение</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    skills: {
        paddingVertical: 10,
        width: `auto`,
        flexDirection: "row",
        flexWrap: `wrap`,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      },
      txtSkills: {
        backgroundColor: "#FFC0Cb",
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 6,
      },
});

export default Skills;