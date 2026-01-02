import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from 'react';

export default function TouchableHighlightScreen() {
    const [eventLog, setEventLog] = useState<string>('Interact with the buttons below');
    const [status, setStatus] = useState<string>('Ready');

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>TouchableHighlight</Text>
                <Text style={styles.headerSubtitle}>
                    onPress, In/Out, LongPress
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        Note: TouchableHighlight requires an <Text style={{ fontWeight: 'bold' }}>underlayColor</Text> to be effective.
                    </Text>
                </View>

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
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="#004d40"
                        onPress={() => setEventLog('onPress fired')}
                    >
                        <Text style={styles.buttonText}>Tap Me (Dark Teal Underlay)</Text>
                    </TouchableHighlight>
                </View>

                {/* 2. Comprehensive Events */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>2. All Events Monitor</Text>
                    <TouchableHighlight
                        style={styles.bigButton}
                        underlayColor="#bf360c"
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
                        <View style={styles.centeredContent}>
                            <Text style={styles.buttonText}>Interact with me</Text>
                            <Text style={styles.smallText}>(Deep Orange Underlay)</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                {/* 3. Custom Underlay */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>3. Bright Underlay</Text>
                    <TouchableHighlight
                        style={styles.buttonSecondary}
                        underlayColor="#ffeb3b"
                        activeOpacity={0.9} // Optional: keep button slightly visible
                        onPress={() => setEventLog('Bright Underlay Button Pressed')}
                    >
                        <Text style={styles.buttonText}>Yellow Underlay</Text>
                    </TouchableHighlight>
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
        backgroundColor: '#009688'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerSubtitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#b2dfdb'
    },
    container: {
        padding: 20
    },
    infoBox: {
        backgroundColor: '#e0f2f1',
        padding: 10,
        borderRadius: 6,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#009688'
    },
    infoText: {
        color: '#00695c',
        fontSize: 13
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
        backgroundColor: '#009688',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonSecondary: {
        backgroundColor: '#607d8b',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center'
    },
    bigButton: {
        backgroundColor: '#ff5722',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    centeredContent: {
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    smallText: {
        color: '#ffccbc',
        fontSize: 12,
        marginTop: 4
    }
});
