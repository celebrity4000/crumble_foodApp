import React, { useRef } from 'react';
import {
    Text,
    TextInput,
    TextInputProps,
    View,
    StyleSheet,
    Image,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { EyeOffIcon, EyeOnIcon } from '../../assets/svg/SvgIcons';

// Define the props for the reusable component
interface InputTextProps extends TextInputProps {
    label: string;
    placeholder?: string;
    style?: StyleProp<ViewStyle>; // Use StyleProp for proper type handling
    textStyle?: StyleProp<TextStyle>; // Use StyleProp for proper type handling
}

const PasswordInput: React.FC<InputTextProps> = ({
    label,
    placeholder,
    style,
    textStyle,
    ...props
}) => {
    const inputRef = useRef<TextInput>(null);
    const [seePassword, setSeePassword] = React.useState(false);

    return (
        <View>
            <Text style={[styles.text, textStyle]}>{label}</Text>
            <View style={[styles.passwordContainer, style]}>
                <TextInput
                    ref={inputRef}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.DimGrey}
                    secureTextEntry={!seePassword} // Correctly handle the secureTextEntry
                    style={styles.passwordInput}
                    {...props} // Spread the rest of the props here
                />
                <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
                    {seePassword ? <EyeOnIcon /> : <EyeOffIcon />}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PasswordInput;

const styles = StyleSheet.create({
    text: {
        color: Colors.CharcoalGray,
        fontSize: 13,
        marginBottom: 8,
        fontFamily: 'Sen',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.AliceBlue,
        paddingHorizontal: 10,
        height: 62,
        borderRadius: 8,
        paddingRight: 24,
    },
    passwordInput: {
        color: Colors.DimGrey,
        flex: 1,
    },
});
