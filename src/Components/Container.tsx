import * as React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    children: any;
    containerStyles?: ViewStyle | ViewStyle[];
    // Question mark added so as to make this container style propertry optional
}

const Container = (props: Props) => {
    return (
        <SafeAreaView style={[styles.container, props.containerStyles]}>
            {props.children}
            {/* This children will now be replaced by text input mentioned in app.tsx */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});

export default Container;