import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import FontSizes from '../constants/FontSizes';
import { RFPercentage } from 'react-native-responsive-fontsize';

const TrainerTitle = props => {
    return (
        <View style={styles.container}>
            <View style={styles.trainerTitle}>
                <Text style={styles.name}>{props.name}</Text>
                <Image style={styles.image} source={{uri: props.image}}/>
            </View>
            <Text style={styles.info}>{props.info}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: RFPercentage(1),
    },
    trainerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    name: {
        textAlignVertical: "center",
        color: Colors.primary,
        fontWeight: "bold",
        paddingRight: '2%',
        fontSize: FontSizes.medium,
    },
    image: {
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: 200
    },
    info: {
        color: Colors.primary,
        paddingTop: RFPercentage(0.6),
        paddingBottom: RFPercentage(1),
        fontSize: FontSizes.medium,
    }

});

export default TrainerTitle;