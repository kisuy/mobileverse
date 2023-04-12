import { Component } from "react";
import { ScrollView } from 'react-native'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import  profileData from '../data/profileData.json'
import MobileverseTextStyled from './MobileverseTextStyled'


class BussinessCard extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar animated={true}
                    backgroundColor='#61dafb'
                    hidden={false}
                />
                <MobileverseTextStyled medium style={styles.title}>Contact Information</MobileverseTextStyled>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <View style={[styles.rowDefault, styles.mainRow]} >
                        <MobileverseTextStyled bold big style={styles.developerName}>{profileData.developerName }</MobileverseTextStyled>
                        <View style={styles.rightColumn}>
                            <Image style={styles.imageTheme} source={require('../../assets/duke.jpg')} />
                            <MobileverseTextStyled tiny style={styles.roleName}>{profileData.roleName }</MobileverseTextStyled>
                        </View>
                    </View>
                    <View style={styles.rowDefault}  >
                        <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                        <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>

                    </View>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.email }</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>{profileData.instagram}</MobileverseTextStyled>
                    <MobileverseTextStyled normal style={styles.normalText}>Final</MobileverseTextStyled>
                </ScrollView>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        flexGrow: 1
    },
    title: {

        color: 'blue'
    },
    imageTheme: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden'
    },
    rightColumn: {
        flex: 1,
        backgroundColor: 'lightyellow',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },
    rowDefault: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        borderColor: 'aliceblue',
        borderWidth: 1

    },
    mainRow: {

        minHeight: '30%',
        maxHeight: '50%',
        backgroundColor: 'lightgrey'
    },

    developerName: {
       /* fontSize: 80,
        fontWeight: 'bold',
       */
        flex: 1,
       
        textAlign: 'center'
    },
    roleName: {
        /*fontSize: 15,*/
        alignSelf: 'flex-start'
    },
    normalText: {
       /* fontSize: 20,*/
        flex: 1,
        marginTop: 5
    }


});

export default BussinessCard