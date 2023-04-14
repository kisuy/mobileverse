import { Button, FlatList, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MobileverseTextStyled from './MobileverseTextStyled';
import { useEffect, useState } from "react";
import Separator from './Separator';

const Dashboard = () => {

    const [posts, setPosts] = useState([])
    const [detail, setDetail] = useState([])
    const [showDetail, setShowDetail] = useState(false)

    useEffect(() => {
        loadDashboard();
    }, []
    )

    const loadDashboard = () => {
        var BreakException = {}

        fetch('http://jsonplaceholder.typicode.com/posts').
            then((response) => response.json())
            .then((json) => {
                setPosts(json)
            }).catch((e) => {
            }).finally(() => {
            })
    }

    const getDetails = (postId) => {
        var BreakException = {}

        setShowDetail(true);

        fetch('http://jsonplaceholder.typicode.com/posts/' + postId).
            then((response) => response.json())
            .then((json) => {
                setDetail(json)
            }).catch((e) => {
            }).finally(() => {
            })


        /***Seccion de prueba de servicio PUT */

        let data ={
            email:'test@test.com',
            password: '132',
            prueba: 'test'
        }

        const requestOptions ={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:  JSON.stringify(data)
        }

        fetch('https://my-json-server.typicode.com/typicode/demo/profile', requestOptions).
            then((response) => response.json())
            .then((json) => {
                alert(json.password)
            }).catch((e) => {
            }).finally(() => {
            })
    }

    const close = () => {
        setShowDetail(false);

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true}
                backgroundColor='#61dafb'
                hidden={false}
            />
            <FlatList
                data={posts}
                renderItem={({ item }) => <View >
                    <TouchableOpacity onPress={() => getDetails(item.id)}>
                        <MobileverseTextStyled normal>{item.title}</MobileverseTextStyled>
                    </TouchableOpacity>
                    <Separator />
                </View>
                }
                keyExtractor={item => item.id}
            />

            <Modal visible={showDetail} >
                <MobileverseTextStyled normal>{detail.userId}</MobileverseTextStyled>
                <MobileverseTextStyled normal>{detail.id}</MobileverseTextStyled>
                <MobileverseTextStyled normal>{detail.title}</MobileverseTextStyled>
                <MobileverseTextStyled normal>{detail.body}</MobileverseTextStyled>
                <Button title='Close' onPress={close}></Button>
            </Modal>

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