import React, {useState} from "react";
import { Text, TextInput } from 'react-native';
import colors from "../../assets/theme/colors";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";

const Login = () => {

    const [value, onChangeText] = useState('');

    return (
        <Container>
            <Text>Username</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
            <Text>Password</Text>
            <TextInput
                style={{height: 40, borderColor: colors.grey, borderWidth: 1}}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
        </Container>
    );
};

export default Login;