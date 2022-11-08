import { ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={styles.container}>
            {/* <Image style={{ width: 40, height: 40 }} source={{ uri: "https://img.icons8.com/windows/32/null/spinner-frame-3.png" }} /> */}
            <ActivityIndicator size="large" color="#1A759F" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: { alignItems: "center", flex: 1, justifyContent: "center", }
})