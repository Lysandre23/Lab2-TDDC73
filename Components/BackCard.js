import React, { useState } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Service from './Service';

export default function BackCard(props) {
    return (
        <View style={styles.main}>
            <Image style={styles.card} source={require('../assets/card.jpeg')} />
            <View style={styles.blackBand}></View>
            <Text style={styles.CVVTitle}>CVV</Text>
            <View style={styles.CVVContainer}
            >
                <Text style={styles.CVV}>{props.CVV}</Text>
            </View>
            <View style={styles.serviceContainer}>
                <Service cardNumber={props.cardNumber}/>
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
    serviceContainer: {
        position: 'relative',
        width: "30%",
        height: "10%",
        top: "-125%",
        left: "79%"
    },
    blackBand: {
        width: "100%",
        height: "16%",
        backgroundColor: "black",
        position: 'relative',
        top: "-140%",
        left: "12%"
    },
    CVVTitle: {
        position: 'relative',
        top: "-136%",
        left: "94%",
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    CVVContainer: {
        position: 'relative',
        top: "-135%",
        left: "12%",
        borderRadius: 5,
        backgroundColor: 'white',   
        width: "92%",
        marginLeft: "4%",
        paddingRight: 5
    },
    CVV: {
        textAlign: 'right',
        padding: 5,
    },
    card: {
        position: 'relative',
        width: "100%",
        height: "100%",
        top: "-50%",
        left: "12%",
        borderRadius: 11
    },
});