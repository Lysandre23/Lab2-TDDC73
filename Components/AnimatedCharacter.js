import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const AnimatedCharacter = ({ character, style }) => {
    const moveAnim = useRef(new Animated.Value(10)).current; // Commence avec une translation de 10

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: 0, // Translate à la position finale
            duration: 200,
            useNativeDriver: true
        }).start();
    }, [character]);

    return (
        <Animated.Text style={[style, { transform: [{ translateY: moveAnim }] }]}>
            {character}
        </Animated.Text>
    );
};
