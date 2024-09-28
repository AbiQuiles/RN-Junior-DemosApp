import {NavigationContainer, useNavigation} from "@react-navigation/native";
import React, {ReactElement} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

type ViewStack = {
    First: ReactElement
    Second: ReactElement
}

export default function PlaygroundView() {
    const Stack = createNativeStackNavigator()
    const FirstKey = 'First'
    const SecondKey = 'Second'

    const FirstView = () => {
        const navigation = useNavigation()
        console.log('Rez First')
        return (
            <View style={styles.firstView}>
                <Pressable onPress={() => navigation.navigate(SecondKey)}>
                    <Text>Go to Second Screen</Text>
                </Pressable>
            </View>
        )
    }
     const SecondView = () => {
         const navigation = useNavigation()
        console.log('Rez Second')
        return (
            <View style={styles.secondView}>
                <Text>We did it!</Text>
                <Pressable onPress={() => navigation.navigate(FirstKey)}>
                    <Text>Go to First Screen</Text>
                </Pressable>
            </View>
        )
    }

    const PressEvent = () => {
        console.debug("Press!!!")
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen
                        name={FirstKey}
                        component={FirstView}
                        options={{headerTitle: 'First Screen'}}
                    />
                    <Stack.Screen
                        name={SecondKey}
                        component={SecondView}
                        options={{headerTitle: 'Second Screen'}}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )

    /*return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Pressable onPress={PressEvent}>
                <Text>Go to Second Screen</Text>
            </Pressable>
        </View>
    )*/
}

const styles = StyleSheet.create({
    firstView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f88b8b'
    }
})