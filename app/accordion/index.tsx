import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { AccordionItem } from '../../components/AccordionItem';

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

                <AccordionItem title="What is React Native?">
                    <Text style={styles.text}>
                        React Native is an open-source UI software framework created by Meta Platforms, Inc.
                        It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP
                        by enabling developers to use the React framework along with native platform capabilities.
                    </Text>
                </AccordionItem>

                <AccordionItem title="Why use Animations?">
                    <Text style={styles.text}>
                        Animations provide smooth feedback to users, making layout changes feel natural rather than abrupt.
                        Using Reanimated allows these animations to run on the UI thread for 60fps performance.
                    </Text>
                </AccordionItem>

                <AccordionItem title="Nested Content Example">
                    <View style={styles.nestedBox}>
                        <Text style={styles.nestedTitle}>Inner Box</Text>
                        <Text style={styles.text}>
                            You can put any React nodes inside the accordion, including other Views, Images, or even buttons.
                        </Text>
                    </View>
                </AccordionItem>

                <AccordionItem title="Long Content Example">
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text style={[styles.text, { marginTop: 10 }]}>
                        More content here to demonstrate dynamic height calculation.
                    </Text>
                </AccordionItem>

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
