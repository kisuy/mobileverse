import { useState } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, View } from "react-native"
import MobileverseTextStyled from './MobileverseTextStyled';
import theme from '../../theme.js'
import NumericInput from "react-native-numeric-input";
import Separator from './Separator';

const Register = ({ navigation }) => {
    const [email, changeEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, changePassword] = useState('')
    const [age, changeAge] = useState(18)

    const registerAction = () => {

        if (!email) {
            alert('Missing email')

        } else {
            navigation.goBack()
            
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.defaultRow}>
                    <View style={styles.defaultColumn}>
                        <MobileverseTextStyled normal>Email</MobileverseTextStyled>
                    </View>
                    <TextInput value={email} onChangeText={changeEmail}
                        keyboardType='email-address' style={styles.input}></TextInput>
                </View>
                <View style={styles.defaultRow}>
                    <View style={styles.defaultColumn}>
                        <MobileverseTextStyled normal>Nickname</MobileverseTextStyled>
                    </View>
                    <TextInput value={nickname} onChangeText={setNickname}
                        textContentType='nickname' style={styles.input}></TextInput>
                </View>
                <View style={styles.defaultRow}>
                    <View style={styles.defaultColumn}>
                        <MobileverseTextStyled normal>Password</MobileverseTextStyled>
                    </View>
                    <TextInput value={password} onChangeText={changePassword} secureTextEntry
                        keyboardType='number-pad' style={styles.input}></TextInput>
                </View>
                <View style={styles.defaultRow}>
                    <View style={styles.defaultColumn}>
                        <MobileverseTextStyled normal>Edad</MobileverseTextStyled>
                    </View>

                    <NumericInput value={age} valueType='integer' onChange={changeAge}></NumericInput>

                </View>

                <View style={styles.defaultRow}>
                    <View style={styles.defaultColumn}>
                    <Separator />
                    </View>
                    <Button title='Register' onPress={registerAction}></Button>
                    

                </View>
            </ScrollView>

            <MobileverseTextStyled normal>Register</MobileverseTextStyled>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    scroll: {

    },
    defaultRow: {
        flexDirection: 'row',
        marginTop: 15

    },
    defaultColumn: {
        flexDirection: 'column',
        width: '30%'
    },
    input: {
        backgroundColor: 'lightyellow',
        fontSize: theme.fonts.normal,
        width: '65%'
    },
})
export default Register