import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData,
    TextInputSelectionChangeEventData
  } from 'react-native';
  import { useState } from 'react';
  
  export default function TextInputEventsScreen() {
    const [value, setValue] = useState('');
    const [info, setInfo] = useState('No event yet');
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <View style={styles.screen}>
  
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TextInput Events</Text>
          <Text style={styles.headerSubtitle}>
            Focus, Change & Layout Lifecycle
          </Text>
        </View>
  
        <ScrollView contentContainerStyle={styles.container}>
  
          {/* 1. onChangeText */}
          <View style={styles.card}>
            <Text style={styles.label}>1️⃣ onChangeText</Text>
            <TextInput
              style={[styles.input, isFocused && styles.focusedInput]}
              placeholder="Type here"
              value={value}
              onChangeText={(text) => {
                setValue(text);
                setInfo(`onChangeText: ${text}`);
              }}
            />
          </View>
  
          {/* 2. onChange (native event) */}
          <View style={styles.card}>
            <Text style={styles.label}>2️⃣ onChange (native event)</Text>
            <TextInput
              style={styles.input}
              placeholder="Native change event"
              onChange={(e) =>
                setInfo(`onChange: ${e.nativeEvent.text}`)
              }
            />
          </View>
  
          {/* 3. onFocus / onBlur */}
          <View style={styles.card}>
            <Text style={styles.label}>3️⃣ onFocus / onBlur</Text>
            <TextInput
              style={[styles.input, isFocused && styles.focusedInput]}
              placeholder="Tap to focus"
              onFocus={() => {
                setIsFocused(true);
                setInfo('onFocus: Input focused');
              }}
              onBlur={() => {
                setIsFocused(false);
                setInfo('onBlur: Input blurred');
              }}
            />
          </View>
  
          {/* 4. onSubmitEditing */}
          <View style={styles.card}>
            <Text style={styles.label}>4️⃣ onSubmitEditing</Text>
            <TextInput
              style={styles.input}
              placeholder="Press Enter / Done"
              returnKeyType="done"
              onSubmitEditing={() =>
                setInfo('onSubmitEditing: Submitted')
              }
            />
          </View>
  
          {/* 5. onKeyPress */}
          <View style={styles.card}>
            <Text style={styles.label}>5️⃣ onKeyPress</Text>
            <TextInput
              style={styles.input}
              placeholder="Press any key"
              onKeyPress={(e) =>
                setInfo(`onKeyPress: ${e.nativeEvent.key}`)
              }
            />
          </View>
  
          {/* 6. onEndEditing */}
          <View style={styles.card}>
            <Text style={styles.label}>6️⃣ onEndEditing</Text>
            <TextInput
              style={styles.input}
              placeholder="Finish editing"
              onEndEditing={() =>
                setInfo('onEndEditing: Editing finished')
              }
            />
          </View>
  
          {/* 7. onSelectionChange */}
          <View style={styles.card}>
            <Text style={styles.label}>7️⃣ onSelectionChange</Text>
            <TextInput
              style={styles.input}
              placeholder="Select text"
              onSelectionChange={(
                e: NativeSyntheticEvent<TextInputSelectionChangeEventData>
              ) => {
                const { start, end } = e.nativeEvent.selection;
                setInfo(`Selection: ${start} → ${end}`);
              }}
            />
          </View>
  
          {/* 8. onContentSizeChange */}
          <View style={styles.card}>
            <Text style={styles.label}>8️⃣ onContentSizeChange</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Multiline content"
              multiline
              onContentSizeChange={(
                e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
              ) => {
                const { width, height } = e.nativeEvent.contentSize;
                setInfo(`Content size: ${Math.round(width)} x ${Math.round(height)}`);
              }}
            />
          </View>
  
          {/* 9. onScroll (TextInput internal scroll) */}
          <View style={styles.card}>
            <Text style={styles.label}>9️⃣ onScroll</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Scroll inside this input"
              multiline
              scrollEnabled
              onScroll={(e) => {
                const y = e.nativeEvent.contentOffset.y;
                setInfo(`onScroll: Y offset = ${Math.round(y)}`);
              }}
            />
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
      backgroundColor: '#16a34a'
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#ffffff'
    },
    headerSubtitle: {
      marginTop: 4,
      fontSize: 14,
      color: '#dcfce7'
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
      marginBottom: 6
    },
  
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      padding: 10,
      fontSize: 16
    },
  
    focusedInput: {
      borderColor: '#2563eb'
    },
  
    multiline: {
      height: 80,
      textAlignVertical: 'top'
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
  