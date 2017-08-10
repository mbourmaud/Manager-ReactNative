// Import librairies for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const CardSection = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={[containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

// Make the component available to other parts of the app
export { CardSection };
