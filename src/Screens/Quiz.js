import { View, Text, Button, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { questions } from './Question'

const Quiz = ({navigation}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuetions = currentQuestion + 1;

        if (nextQuetions < questions.length) {
            setCurrentQuestion(nextQuetions);
        }
        else {
            setShowScore(true)
        }
    }
    return (
       <>
       <View className="flex-1 bg-red-500">
       <View className="flex p-8 justify-center items-center">
       <Text className="text-white text-4xl font-semibold underline">Quiz</Text>
       </View>
       <View>
         {showScore ? (
            <View className="pt-[100px] items-center  bg-white flex m-5 rounded-2xl h-full">
                <Text className="text-4xl font-extralight">
               You Scored {score} out of {questions.length}
                </Text>
            </View>
         ):(
            <>
            <View className="p-5 bg-white flex m-5 rounded-2xl h-full">
            <View className="flex p-2">
                <View className="">
                    <Text className="text-3xl font-medium">Question {currentQuestion + 1}:</Text>
                </View>
                <View>
                    <Text className="text-xl font-light">
                    {questions[currentQuestion].questionText}
                    </Text>
                </View>
            </View>
            <View>
                {
                    questions[currentQuestion].answerOptions.map((answerOptions)=>(
                        <TouchableOpacity className="bg-red-500 p-3 m-5 rounded-3xl">
                           <Button color='#fff' onPress={() => handleAnswerButtonClick(answerOptions.isCorrect)} title={answerOptions.answerText}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
            </View>
            </>
         )}
       </View>
       </View>
       </>
    )
}

export default Quiz