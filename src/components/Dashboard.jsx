import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import MobileverseTextStyled from './MobileverseTextStyled';

const Dashboard = () => {
 
    
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true}
                backgroundColor='#61dafb'
                hidden={false}
            />
            <MobileverseTextStyled normal>Dashboard</MobileverseTextStyled>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
})
export default Dashboard