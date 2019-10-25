import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';


const TitleCard = props => {

    
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/icon.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '30%',
        backgroundColor: 'gray',
    },
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'
    }
});

export default TitleCard;