import { Pressable, StyleSheet, Text, Animated, View, TouchableOpacity, Easing} from "react-native";
import React, { useRef } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const scaleValue = useRef(new Animated.Value(1)).current;

const onPressIn = () => {
    Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 150,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();
};

const onPressOut = () => {
    Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();
};



const CustomFAB = (props) => {
    return (
        <Animated.View
        style={[
            styles.fab,
            { transform: [{ scale: scaleValue }] }
        ]}
    >
        <TouchableOpacity 
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={props.onPress}
            style={styles.fabTouchable}
        >
            <MaterialCommunityIcons name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
    </Animated.View>
    );
};

export default CustomFAB;

const styles = StyleSheet.create({


    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        right: 20,
        bottom: 20,
        backgroundColor: '#4c669f',
        borderRadius: 28,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    fabTouchable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})