import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TrainerTitle from './TrainerTitle';
import Section from './Section';

import Colors from '../constants/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import FontSizes from '../constants/FontSizes';


const Body = props => {
    let sec = [];
    console.log('reservTypes', props.data.reservTypes)
    if(props.data.reservTypes){
        for(let type of props.data.reservTypes){
            sec.push(
                <View key={type.id} style={styles.priceList}>
                    <Text style={styles.primary}>{type.price} SAR</Text>
                    <Text style={styles.primary}>{type.name}</Text>
                </View>
            )
        }
    }

    const buttonPress = () => {
        alert('Reservation complete!');
    }
    return (
            <View style={styles.container}>
                <Section>
                    <Text style={styles.hashtag}>#{props.data.interest}</Text>
                    <Text style={styles.title}>{props.data.title}</Text>
                    <View style={styles.date}>
                        <Text style={styles.primary}>{new Date(props.data.date).toString()}</Text>
                        <FontAwesomeIcon color={Colors.primary} size={RFPercentage(2)} style={styles.fontIcon} icon={faCalendar} />
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.primary}>{props.data.address}</Text>
                        <FontAwesomeIcon color={Colors.primary} size={RFPercentage(2)} style={styles.fontIcon} icon={faThumbtack} />
                    </View>
                </Section>
                <Section>
                    <TrainerTitle name={props.data.trainerName} image={props.data.trainerImg} info={props.data.trainerInfo} />
                </Section>
                <Section>
                    <Text style={styles.infoTitle}>عن الدورة:</Text>
                    <Text style={styles.primary}>{props.data.occasionDetail} </Text>
                </Section>
                <Section>
                    <Text style={styles.infoTitle}>تكلفة الدورة:</Text>
                    {sec}
                </Section>
                <TouchableOpacity activeOpacity={0.8} onPress={buttonPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> قم بالحجز الآن</Text>
                    </View>
                </TouchableOpacity>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2%'
    },
    fontIcon: {
        paddingLeft: '10%'
    },
    hashtag:{
        textAlign: 'right',
        color: Colors.primary,
        fontSize: FontSizes.small,
        opacity: 0.7
    },
    title: {
        textAlign: 'right',
        fontWeight: "bold",
        paddingTop: RFPercentage(1),
        color: Colors.primary,
        fontSize: FontSizes.big,
    },
    date: {
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'flex-end',
        textAlignVertical: "center",
        paddingTop: RFPercentage(1),
    },
    primary: {
        textAlign: 'right',
        color: Colors.primary,
        fontSize: FontSizes.medium,
        paddingBottom: RFPercentage(2),
    },
    infoTitle: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: FontSizes.medium,
        paddingTop: RFPercentage(1),
    },
    priceList:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'rrgb(121, 53, 140)',
        flex: 1,
        alignContent: "center",
        paddingVertical: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: "center",
        textAlign: "center",
        fontSize: FontSizes.huge
    }
});

export default Body;