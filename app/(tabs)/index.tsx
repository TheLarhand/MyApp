import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          source={{ uri: 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg' }}
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.image}
        />
        <Text>Text inside container</Text>
        <Text numberOfLines={2}>Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text </Text>
      </View>

      {[1, 2, 3, 4, 5 ,6 , 7, 8, 9].map((n) => (
        <View key={n} style={styles.flexContainer}>
          <Text>{n}</Text>
          <View style={styles.flexLeft}>
            <Text>box 1</Text>
            <Text>box 2</Text>
            <Text>box 3</Text>
          </View>
          <View style={styles.flexRight}>
            <Text>box 4</Text>
            <Text>box 5</Text>
            <Text>box 6</Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    padding: 16
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  flexLeft: {
    borderWidth: 1,
    borderRadius: 8,
  },
  flexRight: {
    borderWidth: 1,
    borderRadius: 8,
  },
});
