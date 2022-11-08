import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from './Title'
import Loading from './Loading'
export default function Home({ navigation }) {
    return (

        <View style={styles.container}>
            <Title></Title>
            <View style={styles.bannerContainer}>


                < Image resizeMode='contain' style={styles.banner} source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-website-2112230-1779230.png" }} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quiz")}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%"

    },
    button: {
        width: "100%",
        backgroundColor: "#1A759F",
        padding: 20,
        borderRadius: 16,
        alignItems: "center"
        ,
        marginBottom: 30
    },
    buttonText:
        { fontSize: 24, color: "white", fontWeight: "600" }
})