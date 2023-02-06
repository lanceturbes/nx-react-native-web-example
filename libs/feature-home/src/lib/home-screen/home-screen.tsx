import { Heading, Stack, Text } from "native-base"

import { DashboardCard } from "../dashboard-card/dashboard-card"

export const HomeScreen = () => {
    return (
        <Stack space="4" py="4" mx="4">
            <Heading textAlign="center">Welcome back!</Heading>
            <Stack justifyContent="center" space="4">
                <DashboardCard color="orange.500">
                    <Text>To-Do List</Text>
                </DashboardCard>

                <DashboardCard color="blue.400">
                    <Text>Visit Settings</Text>
                </DashboardCard>
            </Stack>
        </Stack>
    )
}
