import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



export default function Quiz({ navigation }) {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);

    const [score, setScore] = useState(0)
    const [options, setOptions] = useState([])




    const getQuiz = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986")
        const data = await res.json();
        // console.log("res", res)
        setQuestions(data.results)
        setOptions(generateOptionSuffle(data.results[ques]))
    }
    useEffect(() => {
        getQuiz()
    }, [])

    const generateOptionSuffle = (question) => {
        const Options = [...question.incorrect_answers]
        Options.push(question.correct_answer)
        shuffleArray(Options)
        return Options;
    }

    const OptionPress = (selectOption) => {
        if (selectOption == questions[ques].correct_answer) {
            setScore(score + 10)

        }
        if (ques < 9) {
            setQues(ques + 1)
            setOptions(generateOptionSuffle(questions[ques + 1]))
        } else {
            navigation.navigate("Result", {
                score: score
            })
        }
    }

    return (

        <>
            {questions ?
                <View style={styles.container}>
                    <View style={styles.top} >
                        <Text style={styles.question}>Q.{ques + 1} {
                            decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.options}>

                        <TouchableOpacity onPress={() => {

                            OptionPress(options[0]);

                        }}
                            style={styles.optionButton
                            }>

                            <Text style={styles.buttonText} >{decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {

                            OptionPress(options[1]);
                        }}
                            style={styles.optionButton
                            }>

                            <Text style={styles.buttonText} >{decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {

                            OptionPress(options[2]);
                        }}
                            style={styles.optionButton
                            }>

                            <Text style={styles.buttonText} >{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => {

                            OptionPress(options[3]);
                        }}
                            style={styles.optionButton
                            }>

                            <Text style={styles.buttonText} >{decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            if (ques < 9) {

                                OptionPress()
                            } else {
                                navigation.navigate("Result")
                            }
                        }}>
                            <Text style={styles.buttonBottomText}>Skip</Text>
                        </TouchableOpacity>
                        {ques == 9 &&
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                                <Text style={styles.buttonBottomText}>result</Text>
                            </TouchableOpacity>}

                    </View>
                </View> :
                <Loading />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%"
    },
    question: {
        fontSize: 18,
        fontWeight: "500"
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
        fontsize: 18,
    },
    buttons: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    button: {

        backgroundColor: "#1A759F",
        padding: 10,
        borderRadius: 16,
        alignItems: "center"
        ,
        marginBottom: 30
    },
    buttonText:
        { fontSize: 16, color: "white", fontWeight: "700" },
    buttonBottomText:
        { fontSize: 17, color: "white", fontWeight: "600" },

    optionButton: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: "#1A759F",
        borderRadius: 12

    }

    ,
    optionTextPress:
        { color: "#34A0A4", fontSize: 16, fontWeight: "700" },

    optionStylePress: {
        borderWidth: 2,
        borderColor: "#34A0A4",
        backgroundColor: "white",
        padding: 10,
        marginVertical: 6,

        borderRadius: 12
    }
})