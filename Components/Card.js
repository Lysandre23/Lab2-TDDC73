import React, { useState } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Service from './Service';

export default function Card(props) {

    return (
        <View style={styles.main}>
            <Image style={styles.card} source={require('../assets/card.jpeg')} />
            <Image style={styles.chip} source={require('../assets/chip.png')} />
            <View style={styles.serviceContainer}><Service cardNumber={props.cardNumberBrut} /></View>
            <Text style={[styles.cardNumber, {borderColor: props.cardNumberFocused ? '#FFFFFF' : '#00000000'}]}>
                {props.cardNumber}
            </Text>
            <View style={[styles.cardNameContainer, {borderColor: props.cardNameFocused ? '#FFFFFF' : '#00000000'}]}>
                <Text style={styles.cardNameTitle}>
                    Card Holder
                </Text>
                <Text style={styles.cardName}>
                    {props.cardName}
                </Text>
            </View>
            <View style={[styles.dateContainer, {borderColor: props.dateFocused ? '#FFFFFF' : '#00000000'}]}>
                <Text style={styles.dateTitle}>Expires</Text>
                <Text style={styles.date}>{props.month} / {props.year}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "80%",
        height: "35%",
        marginBottom: "-15%"
    },
    dateContainer: {
        position: 'relative',
        top: "-158%",
        left: "86%",
        borderWidth: 2,
        borderRadius: 3,
        width: "24%",
        padding: 3
    },
    dateTitle: {
        color: '#EFEFEF',
        fontSize: 12
    },
    date: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardNameContainer: {
        display: 'flex',
        top: "-132%",
        left: "16%",
        width: "70%",
        padding: 3,
        borderWidth: 2,
        borderRadius: 3,
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardNameTitle: {
        fontSize: 12,
        color: '#EFEFEF'
    },
    cardNumber: {
        fontWeight: 'bold',
        position: 'relative',
        top: "-135%",
        left: "16%",
        color: 'white',
        fontSize: 15,
        borderWidth: 2,
        borderRadius: 3,
        padding: 6,
        width: "80%"
    },
    card: {
        position: 'relative',
        width: "100%",
        height: "100%",
        top: "-50%",
        left: "12%",
        borderRadius: 11
    },
    chip: {
        position: 'relative',
        width: "14%",
        height: "19%",
        borderRadius: 5,
        top: "-143%",
        left: "16%"
    },
    serviceContainer: {
        position: 'relative',
        width: '30%',
        height: '10%',
        top: '-159%',
        right: '-79%',
    }
});