import { NavigationContainer } from "@react-navigation/native"
import {
    createStackNavigator,
    StackNavigationOptions
} from "@react-navigation/stack"

import { HomeScreen } from "@/feature-home"

import { linkingConfig } from "../linking-config/linking-config"
import { Route } from "../route/route"

const Stack = createStackNavigator()

const screenOptionsRegistry: Record<Route, StackNavigationOptions> = {
    HOME: { title: "Home" }
}

export const RootNavigator = () => (
    <NavigationContainer linking={linkingConfig}>
        <Stack.Navigator>
            <Stack.Screen
                name={Route.HOME}
                options={screenOptionsRegistry.HOME}
                component={HomeScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
