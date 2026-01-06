import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { AccordionItem } from '../../components/AccordionItem';
import accordionData from '../../assets/data/accordion-data.json';

export default function AccordionScreen() {
    return (
        <View style={styles.screen}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Accordion Component</Text>
                <Text style={styles.headerSubtitle}>
                    Expandable list interactions
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.description}>
                    Tap headers to expand/collapse content.
                </Text>

                {accordionData.map((item) => (
                    <AccordionItem key={item.id} title={item.title}>
                        <Text style={styles.text}>{item.content}</Text>
                    </AccordionItem>
                ))}

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
        padding: 16,
        paddingBottom: 40,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        lineHeight: 22,
    },
    text: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
    },
    nestedBox: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 6,
        marginTop: 4,
    },
    nestedTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    }
});
