import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';

export default function PressableEventsScreen() {
    const [eventLog, setEventLog] = useState<string>('Interact with the buttons below');
    const [pressStatus, setPressStatus] = useState<string>('Ready');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.screen}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pressable Events</Text>
                <Text style={styles.headerSubtitle}>
                    Focus, Press, LongPress
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                {/* Status Display */}
                <View style={styles.statusBox}>
                    <Text style={styles.statusTitle}>Last Event:</Text>
                    <Text style={styles.statusValue}>{eventLog}</Text>
                    <Text style={styles.statusTitle}>Current State:</Text>
                    <Text style={styles.statusValue}>{pressStatus}</Text>
                </View>

                {/* 1. Basic onPress */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>1. Basic onPress</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            pressed && styles.buttonPressed
                        ]}
                        onPress={() => setEventLog('onPress fired!')}
                    >
                        <Text style={styles.buttonText}>Tap Me</Text>
                    </Pressable>
                </View>

                {/* 2. onLongPress */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>2. onLongPress</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            styles.buttonSecondary,
                            pressed && styles.buttonPressed
                        ]}
                        onLongPress={() => setEventLog('onLongPress fired!')}
                        delayLongPress={500}
                    >
                        <Text style={styles.buttonText}>Hold Me (500ms)</Text>
                    </Pressable>
                </View>

                {/* 3. Comprehensive Events */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>3. All Events Monitor</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.bigButton,
                            pressed && styles.bigButtonPressed
                        ]}
                        onPressIn={() => {
                            setEventLog('onPressIn fired');
                            setPressStatus('Pressed In');
                        }}
                        onPressOut={() => {
                            setEventLog('onPressOut fired');
                            setPressStatus('Pressed Out');
                        }}
                        onPress={() => setEventLog('onPress fired (after Release)')}
                        onLongPress={() => setEventLog('onLongPress fired')}
                    >
                        <Text style={styles.buttonText}>Interact with me</Text>
                        <Text style={styles.smallText}>(Press, Hold, Release)</Text>
                    </Pressable>
                </View>

                {/* 4. Focus Events */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>4. Focus (Web/Desktop)</Text>
                    <View style={styles.centerContent}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.interactionButton,
                                isFocused && styles.buttonFocused,
                                pressed && styles.buttonPressed
                            ]}
                            onFocus={() => {
                                setEventLog('onFocus fired');
                                setPressStatus('Focused');
                                setIsFocused(true);
                            }}
                            onBlur={() => {
                                setEventLog('onBlur fired');
                                setPressStatus('Blurred');
                                setIsFocused(false);
                            }}
                            onPress={() => setEventLog('Button Pressed')}
                        >
                            <Text style={styles.buttonText}>Focus Me</Text>
                        </Pressable>
                    </View>
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
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#6200ea'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerSubtitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#e0e0e0'
    },
    container: {
        padding: 20
    },
    statusBox: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    statusTitle: {
        fontSize: 12,
        color: '#666',
        fontWeight: '600',
        marginTop: 5
    },
    statusValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        elevation: 2
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333'
    },
    button: {
        backgroundColor: '#6200ea',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonSecondary: {
        backgroundColor: '#009688'
    },
    buttonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }]
    },
    bigButton: {
        backgroundColor: '#ff5722',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    bigButtonPressed: {
        backgroundColor: '#e64a19'
    },
    interactionButton: {
        backgroundColor: '#607d8b',
        padding: 15,
        borderRadius: 8,
        minWidth: 150,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent'
    },
    buttonFocused: {
        borderColor: '#ffeb3b',
        backgroundColor: '#455a64'
    },
    smallButton: {
        backgroundColor: '#2962ff',
        padding: 10,
        borderRadius: 6,
        minWidth: 80,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    smallText: {
        color: '#ffe0b2',
        fontSize: 12,
        marginTop: 4
    },
    centerContent: {
        alignItems: 'center',
        paddingVertical: 10
    }
});
