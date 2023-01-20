import React, { useState, useEffect} from "react";
import colors from "../../assets/theme/colors";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import Container from "../../components/common/Container";
import Loader from "../../components/common/Container/loader";

const ProsesPage = () => {

    const [namaProses, onChangeNamaProses] = useState('');
    const [cycleTime, onChangeCycleTime] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmitPress = async() => {
        setErrorText('');
        if(!namaProses){
            Alert.alert('Please Fill Nama Proses');
            return;
        } 
        if(!cycleTime){
            Alert.alert('Please Fill Cycle Time');
            return;
        }
        setLoading(true);
        saveProses();
    }

    const saveProses = async() => {
        const config = {
            server: '192.168.1.6', //ip address of the mssql database
            username: 'sa', //username to login to the database
            password: 'AdminDL-dev-123', //password to login to the database
            database: 'CobaSql', //the name of the database to connect to
        };

        try {
            const connected = await MSSQL.connect(config);
            console.log(connected);
            if(connected) {
                const query = "INSERT INTO Proses Set nama_proses = '"+namaProses+"', cycle_time ='"+cycleTime+"'";
                const result = await MSSQL.executeQuery(query);
                if(result.length > 0) {
                    Alert.alert('Success');
                } else {
                    Alert.alert('Failed To Add Data');
                }

                await MSSQL.close();
            }
        } catch {
            Alert.alert('Error Connecting to Database');
        }

        setLoading(false);
    }

    return (
        <Container>
            <Loader loading={loading} />
            <Text>Nama Proses</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangeNamaProses(text)}
                value={namaProses}
            />
            <Text>Cycle Time</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangeCycleTime(text)}
                value={cycleTime}
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>SIMPAN</Text>
            </TouchableOpacity>
        </Container>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
});

export default ProsesPage;