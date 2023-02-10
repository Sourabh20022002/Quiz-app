import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboard from './src/Screens/Onboard'
import Quiz from './src/Screens/Quiz'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#ffffff"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
  headerShown: false,
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboard' screenOptions={globalScreenOptions}  >
        <Stack.Screen name='Onboard' component={Onboard} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Quiz' component={Quiz} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App