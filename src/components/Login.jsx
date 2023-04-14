import { useState } from 'react';
import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import MobileverseTextStyled from './MobileverseTextStyled';
import theme from '../../theme.js'
import Separator from './Separator';


const Login = ({navigation}) => {

const [email, setEmail]=useState('a')
const [password, setPassword]=useState('a')


    const signin = () => {
        
        if(!email){
            alert('Missing email')

        }


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
                <MobileverseTextStyled tiny>Forgot Password</MobileverseTextStyled>
            </View>
            <Button title='Sign in' onPress={signin}></Button>
            <Separator/>
            <Button title='Register' onPress={() =>{navigation.navigate('Register')}}></Button>

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
    }
})

export default Login