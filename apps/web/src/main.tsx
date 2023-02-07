import { AppRegistry } from "react-native"

import { App } from "./app/app"

AppRegistry.registerComponent("Web", () => App)
AppRegistry.runApplication("Web", {
    rootTag: document.getElementById("root")
})
