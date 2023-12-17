import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function DatePicker(props) {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Expiration Date</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.months}
                    selectedValue={month}
                    onValueChange={(itemValue, itemIndex) => {
                            setMonth(itemValue);
                            props.updateMonth(itemValue);
                        }
                    }
                >
                    <Picker.Item label="01" value="01" />
                    <Picker.Item label="02" value="02" />
                    <Picker.Item label="03" value="03" />
                    <Picker.Item label="04" value="04" />
                    <Picker.Item label="05" value="05" />
                    <Picker.Item label="06" value="06" />
                    <Picker.Item label="07" value="07" />
                    <Picker.Item label="08" value="08" />
                    <Picker.Item label="09" value="09" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                </Picker>
                <Picker
                    style={styles.years}
                    selectedValue={year}
                    onValueChange={(itemValue, itemIndex) => {
                            setYear(itemValue);
                            props.updateYear(itemValue);
                        }
                    }>
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="26" value="26" />
                    <Picker.Item label="27" value="27" />
                    <Picker.Item label="28" value="28" />
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        width: "70%",
        marginLeft: "-5%"
    },
    title: {
        marginLeft: "8%",
        marginBottom: 2,
        marginLeft: "4%"
    },
    pickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        height: "27.5%",
        alignItems: 'center',
    },
    months: {
        width: "50%",
    },
    years: {
        width: "50%"
    }
});