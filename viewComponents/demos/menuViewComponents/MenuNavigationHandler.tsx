import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MenuView from "./MenuView";

export default function MenuNavigationHandler() {
    const DemoMenuNavKey = 'DemosMenu'
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        presentation: 'modal',
                        headerShown: false
                    }}
                    name={DemoMenuNavKey}
                    component={MenuView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}