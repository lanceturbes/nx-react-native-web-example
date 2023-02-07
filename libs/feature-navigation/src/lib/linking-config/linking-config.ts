import { LinkingOptions } from "@react-navigation/native"

import { Route } from "../route/route"

export type LinkParamList = {
    [Route.HOME]: undefined
    [Route.PROFILE]: undefined
}

export const linkingConfig: LinkingOptions<LinkParamList> = {
    prefixes: [],
    config: {
        initialRouteName: Route.HOME,
        screens: {
            HOME: "/",
            PROFILE: "/profile"
        }
    }
}
