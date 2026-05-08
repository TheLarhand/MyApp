import Todo from '@/components/ToDo';
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

      <Todo/>

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
