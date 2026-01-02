import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    Pressable
  } from 'react-native';
  import { useState } from 'react';
  
  export default function TextEventsScreen() {
    const [info, setInfo] = useState<string>('No event yet');
    const [isResponderActive, setIsResponderActive] = useState<boolean>(false);
  
    return (
      <View style={styles.screen}>
  
        {/* Header (FIXED) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Text Component Events</Text>
          <Text style={styles.headerSubtitle}>
            Press, Responder & Layout Events
          </Text>
        </View>
  
        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.container}>
  
          {/* 1. onPress */}
          <View style={styles.card}>
            <Pressable onPress={() => Alert.alert('Event', 'onPress triggered')}>
              <Text style={styles.text}>
                1️⃣ onPress – Tap Me
              </Text>
            </Pressable>
          </View>
  
          {/* 2. onLongPress */}
          <View style={styles.card}>
            <Pressable onLongPress={() => Alert.alert('Event', 'onLongPress triggered')}>
              <Text style={styles.text}>
                2️⃣ onLongPress – Hold Me
              </Text>
            </Pressable>
          </View>
  
          {/* 3. onPressIn / onPressOut */}
          <View style={styles.card}>
            <Pressable
              onPressIn={() => setInfo('onPressIn: Finger touched')}
              onPressOut={() => setInfo('onPressOut: Finger released')}
              style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressed
              ]}
            >
              <Text style={styles.text}>
                3️⃣ onPressIn / onPressOut – Touch & Release
              </Text>
            </Pressable>
          </View>
  
          {/* 4. onTextLayout */}
          <View style={styles.card}>
            <Text
              style={styles.text}
              onTextLayout={(e) => {
                const lines = e.nativeEvent.lines.length;
                setInfo(`onTextLayout: ${lines} line(s) rendered`);
              }}
            >
              4️⃣ onTextLayout – Layout Info
            </Text>
          </View>
  
          {/* 5. onResponderGrant */}
          <View style={styles.card}>
            <Text
              style={[
                styles.text,
                isResponderActive && styles.responderActive
              ]}
              onStartShouldSetResponder={() => true}
              onResponderGrant={() => {
                setIsResponderActive(true);
                setInfo('onResponderGrant: Responder acquired');
              }}
              onResponderRelease={() => {
                setIsResponderActive(false);
                setInfo('onResponderRelease: Responder released');
              }}
              onResponderTerminate={() => {
                setIsResponderActive(false);
                setInfo('onResponderTerminate: Responder cancelled');
              }}
            >
              5️⃣ onResponderGrant – Responder Lifecycle
            </Text>
          </View>
  
          {/* 6. onResponderMove */}
          <View style={styles.card}>
            <Text
              style={styles.text}
              onStartShouldSetResponder={() => true}
              onResponderMove={() =>
                setInfo('onResponderMove: Finger moving')
              }
            >
              6️⃣ onResponderMove – Drag Finger
            </Text>
          </View>
  
          {/* 7. onResponderRelease */}
          <View style={styles.card}>
            <Text
              style={styles.text}
              onStartShouldSetResponder={() => true}
              onResponderRelease={() =>
                setInfo('onResponderRelease: Finger released')
              }
            >
              7️⃣ onResponderRelease – Release Touch
            </Text>
          </View>
  
          {/* Status */}
          <View style={styles.statusBox}>
            <Text style={styles.statusTitle}>Event Status</Text>
            <Text style={styles.statusValue}>{info}</Text>
          </View>
  
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#f2f2f2'
    },
  
    /* Header */
    header: {
      paddingTop: 48,
      paddingBottom: 16,
      paddingHorizontal: 20,
      backgroundColor: '#2563eb'
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#ffffff'
    },
    headerSubtitle: {
      marginTop: 4,
      fontSize: 14,
      color: '#dbeafe'
    },
  
    /* Content */
    container: {
      padding: 20
    },
  
    card: {
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 12,
      elevation: 2
    },
  
    text: {
      fontSize: 16,
      color: '#333'
    },
  
    /* Pressable feedback */
    pressable: {
      borderRadius: 4,
      padding: 4
    },
    pressed: {
      backgroundColor: '#dcfce7'
    },
  
    /* Responder feedback */
    responderActive: {
      backgroundColor: '#dbeafe',
      color: '#1d4ed8',
      padding: 4,
      borderRadius: 4
    },
  
    /* Status */
    statusBox: {
      marginTop: 20,
      padding: 16,
      backgroundColor: '#e8f0ff',
      borderRadius: 8
    },
    statusTitle: {
      fontWeight: '700'
    },
    statusValue: {
      marginTop: 4,
      color: '#0057ff'
    }
  });
  