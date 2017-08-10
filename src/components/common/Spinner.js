// Import librairies for making a component
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Make a component
const Spinner = ({ size }) => {
    const { spinnerStyle } = styles;

    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

// Make the component available to other parts of the app
export { Spinner };
