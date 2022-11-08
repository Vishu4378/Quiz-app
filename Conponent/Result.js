import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Result({ navigation, route }) {
    const params = route.params

    console.log(params)
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Result</Text>
            </View>

            <View style={styles.bannerContainer}>

                <Image resizeMode='contain' style={styles.banner} source={{ uri: ("https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png") }} />
                {params ? <Text>Your score {params.score}</Text> : <Text>Your score 0</Text>}
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: "#1A759F",
                    padding: 4
                    ,
                    borderRadius: 8, marginTop: 140

                }} onPress={() => navigation.navigate("Home")}>
                    <Text style={{ fontSize: 17, color: "white", fontWeight: "600" }}>Return To Home</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: "center"
        , marginVertical: 30,
        display: "flex",
        justifyContent: "space-between"


    },
    top: {
        marginTop: 40,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",

    },
    buttonText:
        { fontSize: 24, color: "white", fontWeight: "600" },
    title: {
        fontSize: 34,
        fontWeight: '600'
    },
    container: {
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",

    }

})

