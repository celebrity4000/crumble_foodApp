import React, { useRef } from 'react';
import { Text, TextInput, TextInputProps, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

// Define the props for the reusable component
interface InputTextProps extends TextInputProps {
    label: string;
    placeholder?: string;
    style?: object;
    textStyle?: object;
}

const InputText: React.FC<InputTextProps> = ({ label, placeholder, style, textStyle, ...props }) => {
    const inputRef = useRef<TextInput>(null);

    return (
        <View>
            <Text style={[styles.text, textStyle]}>{label}</Text>
            <TextInput
                ref={inputRef}
                placeholder={placeholder}
                style={[styles.input, style]}
                placeholderTextColor={Colors.DimGrey}
                {...props}
            />
        </View>
    );
};

export default InputText;

const styles = StyleSheet.create({
    input: {
        height: 62,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 0,
        color: Colors.DimGrey,
        backgroundColor: Colors.AliceBlue,
    },
    text: {
        color: Colors.CharcoalGray,
        fontSize: 13,
        marginBottom: 8,
        fontFamily: 'Sen'
    },
});
