import * as React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { PrimaryTheme } from '../styles/Themes';

export interface Props {
    title: string;
    disabled?: boolean;
    buttonStyles?: ViewStyle | ViewStyle[];
    textStyles?: TextStyle | TextStyle[];
    onPress: any;
}

const CustomButton = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.buttonStyles, props.buttonStyles]}
            disabled={props.disabled}
        >
            <Text style={[styles.textStyles, props.textStyles]}>{props.title}</Text>
        </TouchableOpacity>
    )
};

CustomButton.defaultProps = {
    // This is used to set some property by default
    disabled: false
};

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: PrimaryTheme.$PRIMARY_COLOR,
        borderRadius: 5,
        width: 120,
        height: 40
    }, 
    textStyles : {
        color: '#fff',
        textAlign: 'center',
        padding: 10
    }
});

export default (CustomButton);