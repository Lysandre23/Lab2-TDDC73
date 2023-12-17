import React, { useState } from 'react';
import { StyleSheet , View, Text, TextInput } from 'react-native';

export default function LabelledInput(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    const onFocus = () => {
        setIsFocused(true);
        props.onFocus();
    }
    const onBlur = () => {
        setIsFocused(false);
        props.onBlur();
    }

    return (
        <View style={[styles.main, {width: props.width, marginLeft: props.marginLeft}]}>
            <Text style={styles.text}>{props.text}</Text>
            <TextInput 
                style={[
                    styles.input,
                    {
                        borderColor: isFocused ? '#63BCFF' : '#d7d7d7',
                        borderWidth: isFocused ? 2 : 1,
                    }
                ]} placeholder={props.placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChangeText={(v) => {
                    setValue(props.computeText(v));
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 10
    },
    text: {
        fontFamily: 'Verdana',
        marginBottom: 2
    },
    input: {
        borderRadius: 4,
        padding: 10
    }
});