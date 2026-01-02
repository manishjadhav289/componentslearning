import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView
  } from 'react-native';
  import { useState } from 'react';
  
  export default function ButtonEventsScreen() {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState('No event yet');
    const [disabled, setDisabled] = useState(false);
  
    return (
      <View style={styles.screen}>
  
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Button Component</Text>
          <Text style={styles.headerSubtitle}>
            React Native Button Events
          </Text>
        </View>
  
        <ScrollView contentContainerStyle={styles.container}>
  
          {/* 1. Basic onPress */}
          <View style={styles.card}>
            <Text style={styles.label}>1️⃣ onPress</Text>
            <Button
              title="Press Me"
              onPress={() => {
                setCount(count + 1);
                setInfo('onPress: Button pressed');
              }}
            />
          </View>
  
          {/* 2. Button with parameters */}
          <View style={styles.card}>
            <Text style={styles.label}>2️⃣ onPress with logic</Text>
            <Button
              title="Increase Count"
              color="#2563eb"
              onPress={() => {
                setCount((prev) => prev + 5);
                setInfo('onPress: Count increased by 5');
              }}
            />
          </View>
  
          {/* 3. Disabled Button */}
          <View style={styles.card}>
            <Text style={styles.label}>3️⃣ Disabled Button</Text>
            <Button
              title={disabled ? 'Disabled' : 'Click to Disable'}
              disabled={disabled}
              onPress={() => {
                setDisabled(true);
                setInfo('Button disabled');
              }}
            />
          </View>
  
          {/* 4. Reset Button */}
          <View style={styles.card}>
            <Text style={styles.label}>4️⃣ Reset State</Text>
            <Button
              title="Reset"
              color="#dc2626"
              onPress={() => {
                setCount(0);
                setDisabled(false);
                setInfo('State reset');
              }}
            />
          </View>
  
          {/* Status */}
          <View style={styles.statusBox}>
            <Text style={styles.statusTitle}>Event Status</Text>
            <Text style={styles.statusValue}>{info}</Text>
            <Text style={styles.counter}>Count: {count}</Text>
          </View>
  
          {/* Explanation */}
          <View style={styles.noteBox}>
            <Text style={styles.noteTitle}>Important Note</Text>
            <Text style={styles.noteText}>
              React Native Button only supports onPress.
              For advanced interactions, use Pressable.
            </Text>
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
      backgroundColor: '#7c3aed'
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#ffffff'
    },
    headerSubtitle: {
      marginTop: 4,
      fontSize: 14,
      color: '#ede9fe'
    },
  
    /* Content */
    container: {
      padding: 20
    },
  
    card: {
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 12
    },
  
    label: {
      fontWeight: '600',
      marginBottom: 8
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
    },
    counter: {
      marginTop: 4,
      fontWeight: '600'
    },
  
    /* Note */
    noteBox: {
      marginTop: 16,
      padding: 16,
      backgroundColor: '#fff7ed',
      borderRadius: 8
    },
    noteTitle: {
      fontWeight: '700'
    },
    noteText: {
      marginTop: 4,
      color: '#7c2d12'
    }
  });
  