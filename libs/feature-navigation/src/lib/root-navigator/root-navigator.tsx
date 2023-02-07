import { NavigationContainer } from "@react-navigation/native"
import {
    createStackNavigator,
    StackNavigationOptions
} from "@react-navigation/stack"

import { HomeScreen } from "@/feature-home"
import { UserProfileScreen } from "@/feature-user-profile"

import { HeaderBar } from "../header-bar/header-bar"
import { linkingConfig } from "../linking-config/linking-config"
import { Route } from "../route/route"

const Stack = createStackNavigator()

const screenOptionsRegistry: Record<Route, StackNavigationOptions> = {
    HOME: { title: "Home" },
    PROFILE: { title: "User Profile" }
}

export const RootNavigator = () => (
    <NavigationContainer linking={linkingConfig}>
        <Stack.Navigator screenOptions={{ header: HeaderBar }}>
            <Stack.Screen
                name={Route.HOME}
                options={screenOptionsRegistry.HOME}
                component={HomeScreen}
            />
            <Stack.Screen
                name={Route.PROFILE}
                options={screenOptionsRegistry.PROFILE}
                component={UserProfileScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
