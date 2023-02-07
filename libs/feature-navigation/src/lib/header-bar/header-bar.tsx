import { Link } from "@react-navigation/native"
import { StackHeaderProps } from "@react-navigation/stack"
import { ArrowBackIcon, Heading, IconButton, Row, Spacer } from "native-base"

import { Route } from "../route/route"

export const HeaderBar = ({ navigation, route, back }: StackHeaderProps) => (
    <Row alignItems="center">
        {back ? (
            <IconButton icon={<ArrowBackIcon />} onPress={navigation.goBack} />
        ) : null}
        <Heading>{route.name}</Heading>
        <Spacer />
        <Link to={{ screen: Route.PROFILE }}>Profile</Link>
    </Row>
)
