import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Service({ cardNumber }) {
  let cardImageSource = require('../assets/visa.png');

  const getCardImageSource = () => {
    const cardPrefix = cardNumber.substring(0, 2);
    switch (cardPrefix) {
        case '41': // Visa commence par 41
        case '42':
        case '43':
        case '44':
        case '45':
            cardImageSource = require('../assets/visa.png');
            break;
        case '51': // MasterCard commence par 51
        case '52':
        case '53':
        case '54':
        case '55':
            cardImageSource = require('../assets/mastercard.png');
            break;
        case '34': // American Express commence par 34 ou 37
        case '37':
            cardImageSource = require('../assets/amex.png');
            break;
        case '62': // UnionPay commence par 62
            cardImageSource = require('../assets/unionpay.png');
            break;
        case '65': // Discover commence par 65
            cardImageSource = require('../assets/discover.png');
            break;
        case '35': // JCB commence par 35
            cardImageSource = require('../assets/jcb.png');
            break;
        case '30': // Diners Club commence par 30 ou 36
        case '36':
            cardImageSource = require('../assets/dinersclub.png');
            break;
        case '97': // Troy commence par 97
            cardImageSource = require('../assets/troy.png');
            break;
    }

    return cardImageSource;
  };

  return (
    <Image source={getCardImageSource()} style={styles.main} />
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});
