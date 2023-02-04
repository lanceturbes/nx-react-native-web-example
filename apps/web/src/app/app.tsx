import { NativeBaseProvider } from "native-base"

import { RootNavigator } from "@/feature-navigation"

export const App = () => (
    <NativeBaseProvider>
        <RootNavigator />
    </NativeBaseProvider>
)
