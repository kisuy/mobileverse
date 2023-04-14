import { useState } from 'react';
import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MobileverseTextStyled from './MobileverseTextStyled';
import theme from '../../theme.js'
import Separator from './Separator';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('Chaim_McDermott@dana.io')
    const [password, setPassword] = useState('Delphine')

    const signin = () => {
        var BreakException = {}
        
        if (!email) {
            alert('Missing email')
        }

        fetch('https://jsonplaceholder.typicode.com/users').
            then((response) => response.json())
            .then((json) => {
                json.forEach(function (data) {
                   
                    if (data.email === email && data.username === password) {
                        navigation.navigate('Dashboard')
                        throw BreakException
                    }
                })
                alert('Something goes wrong')
            }).catch((e) => {
            }).finally(() => {
            })

    }

    const goForgotPwd = () => {
        navigation.navigate('BussinessCard')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true}
                backgroundColor='#61dafb'
                hidden={false}
            />
            <View style={styles.defaultRow}>
                <View style={styles.defaultColumn}>
                    <MobileverseTextStyled normal>Email</MobileverseTextStyled>
                </View>
                <TextInput keyboardType='email-address' value={email}
                    onChangeText={setEmail} style={styles.input}></TextInput>
            </View>
            <View style={styles.defaultRow}>
                <View style={styles.defaultColumn}>
                    <MobileverseTextStyled normal>Password</MobileverseTextStyled>
                </View>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry
                    keyboardType='number-pad' style={styles.input}></TextInput>
            </View>
            <View style={styles.defaultRow}>

                <View style={styles.defaultColumn}>

                </View>
                <TouchableOpacity style={styles.button} onPress={goForgotPwd}>
                    <MobileverseTextStyled tiny>Forgot Password</MobileverseTextStyled>
                </TouchableOpacity>

            </View>
            <Button title='Sign in' onPress={signin}></Button>
            <Separator />
            <Button title='Register' onPress={() => { navigation.navigate('Register') }}></Button>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    input: {
        backgroundColor: 'lightyellow',
        fontSize: theme.fonts.normal,
        width: '65%'
    },
    defaultRow: {
        flexDirection: 'row',
        marginTop: 15

    },
    defaultColumn: {
        flexDirection: 'column',
        width: '30%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
})

export default Login