import { RootNavigator } from "@waywardpooch/feature-navigation"
import { NativeBaseProvider } from "native-base"

export const App = () => (
    <NativeBaseProvider>
        <RootNavigator />
    </NativeBaseProvider>
)
