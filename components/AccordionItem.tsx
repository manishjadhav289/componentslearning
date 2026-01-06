import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutChangeEvent } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentHeight = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(isOpen ? contentHeight.value : 0, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    });

    const iconStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: withTiming(isOpen ? '180deg' : '0deg', {
                        duration: 300,
                    }),
                },
            ],
        };
    });

    const onLayout = (event: LayoutChangeEvent) => {
        const height = event.nativeEvent.layout.height;
        if (height > 0) {
            contentHeight.value = height;
        }
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setIsOpen(!isOpen)}
                style={({ pressed }) => [
                    styles.header,
                    pressed && styles.pressedHeader,
                ]}
            >
                <Text style={styles.title}>{title}</Text>
                <Animated.View style={iconStyle}>
                    <Ionicons name="chevron-down" size={20} color="#333" />
                </Animated.View>
            </Pressable>
            <Animated.View style={[styles.contentContainer, animatedStyle]}>
                <View style={styles.innerContent} onLayout={onLayout}>
                    {children}
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    pressedHeader: {
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    contentContainer: {
        overflow: 'hidden',
    },
    innerContent: {
        position: 'absolute',
        width: '100%',
        top: 0,
        padding: 16,
        paddingTop: 0,
    },
});
