import React, {useState, useEffect} from "react";
import { Text, TextInput, TouchableOpacity, Alert, StyleSheet, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../../assets/theme/colors";
import MSSQL from 'react-native-mssql';
import {HOME_NAVIGATOR, LOGIN} from '../../constants/routeName';
import Container from "../../components/common/Container";
import Loader from "../../components/common/Container";

const Login = ({navigation}) => {

    const [username, onChangeUsernameText] = useState('');
    const [password, onChangePasswordText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleSubmitPress = async() => {
        setErrorText('');
        if(!username){
            Alert.alert('Please Fill Username');
            return;
        } 
        if(!password){
            Alert.alert('Please Fill Password');
            return;
        }
        setLoading(true);
        LoggedIn();
    }
       
    const LoggedIn = async() => {
            const config = {
                server: '192.168.1.6', //ip address of the mssql database
                username: 'sa', //username to login to the database
                password: 'AdminDL-dev-123', //password to login to the database
                database: 'CobaSql', //the name of the database to connect to
            };

            const connected = await MSSQL.connect(config);
            if(connected) {
                const query = "SELECT TOP(1) * FROM Biodata Where Nama = '"+username+"'";
                const result = await MSSQL.executeQuery(query);
                if(result.length > 0) {
                    AsyncStorage.setItem('username', username);
                    navigation.replace('DrawerNavigator');
                } else {
                    Alert.alert('Invalid Credential');
                }

                await MSSQL.close();
            } else {
                Alert.alert('Error Connecting to Database');
            }

            setLoading(false);
    }

    return (
        <Container>
            <Loader loading={loading} />
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/sewing-machine.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <Text>Username</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangeUsernameText(text)}
                value={username}
            />
            <Text>Password</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangePasswordText(text)}
                value={password}
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
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

export default Login;