import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native UI Events Lab</Text>
      <Text style={styles.subtitle}>
        Learn component events with live feedback
      </Text>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/text')}
      >
        <Text style={styles.cardText}>Text Component Events</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/textinput')}
      >
        <Text style={styles.cardText}>TextInput Component Events</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/button')}
      >
        <Text style={styles.cardText}>Button Component Event</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/pressable')}
      >
        <Text style={styles.cardText}>Pressable Component Events</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/touchableopacity')}
      >
        <Text style={styles.cardText}>TouchableOpacity Events</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/touchablehighlight')}
      >
        <Text style={styles.cardText}>TouchableHighlight Events</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/accordion')}
      >
        <Text style={styles.cardText}>Accordion Component</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 24
  },
  card: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12
  },
  cardText: {
    color: '#fff',
    fontWeight: '600'
  }
});
