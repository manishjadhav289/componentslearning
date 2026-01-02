import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function TouchableOpacityScreen() {
    const [eventLog, setEventLog] = useState<string>('Interact with the buttons below');
    const [status, setStatus] = useState<string>('Ready');

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>TouchableOpacity</Text>
                <Text style={styles.headerSubtitle}>
                    onPress, In/Out, LongPress
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                {/* Status Display */}
                <View style={styles.statusBox}>
                    <Text style={styles.statusTitle}>Last Event:</Text>
                    <Text style={styles.statusValue}>{eventLog}</Text>
                    <Text style={styles.statusTitle}>Current State:</Text>
                    <Text style={styles.statusValue}>{status}</Text>
                </View>

                {/* 1. Basic Interaction */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>1. Basic Interaction</Text>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.6}
                        onPress={() => setEventLog('onPress fired')}
                    >
                        <Text style={styles.buttonText}>Tap Me</Text>
                    </TouchableOpacity>
                </View>

                {/* 2. Comprehensive Events */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>2. All Events Monitor</Text>
                    <TouchableOpacity
                        style={styles.bigButton}
                        activeOpacity={0.8}
                        onPress={() => setEventLog('onPress fired')}
                        onPressIn={() => {
                            setEventLog('onPressIn fired');
                            setStatus('Pressed In');
                        }}
                        onPressOut={() => {
                            setEventLog('onPressOut fired');
                            setStatus('Pressed Out');
                        }}
                        onLongPress={() => {
                            setEventLog('onLongPress fired');
                            setStatus('Long Pressed');
                        }}
                        delayLongPress={500}
                    >
                        <Text style={styles.buttonText}>Interact with me</Text>
                        <Text style={styles.smallText}>(Press, Hold, Release)</Text>
                    </TouchableOpacity>
                </View>

                {/* 3. Custom Opacity */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>3. Custom Active Opacity (0.2)</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        activeOpacity={0.2}
                        onPress={() => setEventLog('Custom Opacity Button Pressed')}
                    >
                        <Text style={styles.buttonText}>High Feedback</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#e91e63'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerSubtitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#f8bbd0'
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
        backgroundColor: '#e91e63',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonSecondary: {
        backgroundColor: '#9c27b0'
    },
    bigButton: {
        backgroundColor: '#ff4081',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    smallText: {
        color: '#f8bbd0',
        fontSize: 12,
        marginTop: 4
    }
});
