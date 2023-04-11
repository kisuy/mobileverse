import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true}
                    backgroundColor='#61dafb'
                    hidden={false}
                />
            <Text>AQUI ESTOY</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
})

export default Login