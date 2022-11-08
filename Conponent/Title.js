import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={
                styles.title
            }>Quizer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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