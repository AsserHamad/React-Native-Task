import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Section = props => {
    return (
        <View style={styles.container}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFPercentage(2),
        borderBottomColor: Colors.light,
        borderBottomWidth: 1
    }
    
});

export default Section;