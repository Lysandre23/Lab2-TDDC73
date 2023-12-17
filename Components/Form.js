import React, { useState } from 'react';
import { StyleSheet , View, Image, TouchableOpacity, Text } from 'react-native';
import LabelledInput from './LabelledInput';
import Card from './Card';
import DatePicker from './DatePicker';
import BackCard from './BackCard';

export default function Form(props) {
    const [cardNumber, setCardNumber] = useState("####   ####   ####   ####");
    const [cardNumberBrut, setCardNumberBrut] = useState('');
    const [cardNumberFocused, setCardNumberFocused] = useState(false);
    const [cardName, setCardName] = useState("");
    const [cardNameFocused, setCardNameFocused] = useState(false);
    const [month, setMonth] = useState("01");
    const [year, setYear] = useState("23");
    const [dateFocused, setDateFocused] = useState(false);
    const [CVV, setCVV] = useState("");
    const [CVVFocused, setCVVFocused] = useState(false);

    const computeCardNumberForTextInput = (str) => {
        const digitsOnly = str.replace(/\D/g, '');
        setCardNumberBrut(digitsOnly);
        let formattedStr = '';
        setCardNumber("");
        for (let i = 0; i < digitsOnly.length; i++) {
            formattedStr += digitsOnly[i];
            if ((i + 1) % 4 === 0 && i < digitsOnly.length - 1) {
                formattedStr += ' ';
            }
        }
        if(formattedStr.length > 19) {
            formattedStr = formattedStr.substring(0, 20);
        }
        let cn = '';
        for (let i = 0; i < 16; i++) {
            cn += (digitsOnly[i] == undefined ? "#" : digitsOnly[i]);
            if ((i + 1) % 4 === 0 && i < 15) {
                cn += '   ';
            }
        }
        setCardNumber(cn);
        return formattedStr;
    }

    const computeCardName = (str) => {
        setCardName(str);
    }

    const computeCVV = (str) => {
        setCVV(str.substring(0,4));
        return str.substring(0,4);
    }
    
    const updateMonth = (str) => {
        setMonth(str);
        setDateFocused(true);
        setCardNumberFocused(false);
        setCardNameFocused(false);
        setCVVFocused(false);
    }

    const updateYear = (str) => {
        setYear(str);
        setDateFocused(true);
        setCardNumberFocused(false);
        setCardNameFocused(false);
        setCVVFocused(false);
    }

    return (
        <View style={styles.main}>
            {CVVFocused ? 
            <BackCard cardNumber={cardNumberBrut} CVV={CVV}/>
            :
            <Card cardNumberBrut={cardNumberBrut} dateFocused={dateFocused} month={month} year={year} cardNumberFocused={cardNumberFocused} cardNumber={cardNumber} cardNameFocused={cardNameFocused} cardName={cardName} />
            }
            <LabelledInput width="84%" marginLeft="8%" onFocus={() => {setCardNumberFocused(true); setDateFocused(false)}} onBlur={() => {setCardNumberFocused(false)}} computeText={computeCardNumberForTextInput} text='Card Number' placeholder='XXXX-XXXX-XXXX-XXXX'/>
            <LabelledInput width="84%" marginLeft="8%" onFocus={() => {setCardNameFocused(true); setDateFocused(false)}} onBlur={() => {setCardNameFocused(false)}} computeText={computeCardName} text='Card Name' placeholder='Jacques Chirac'/>
            <View style={styles.dateAndCVV}>
                <DatePicker updateMonth={updateMonth} updateYear={updateYear}/>
                <LabelledInput width="30%" marginLeft="7%" onFocus={() => {setCVVFocused(true), setDateFocused(false)}} onBlur={() => {setCVVFocused(false)}} computeText={computeCVV} text='CVV' placeholder='###'/>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    dateAndCVV: {
        display: 'flex',
        flexDirection: 'row',
        width: "80%",
        marginLeft: "10%",
        marginBottom: "-20%"
    },
    submitButton: {
        padding: 10,
        backgroundColor: "#0055D4",
        borderRadius: 3,
        width: "84%",
        marginLeft: "8%"
    },
    submitButtonText: {
        color: "white",
        textAlign: 'center'
    }
});