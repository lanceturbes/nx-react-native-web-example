import { Heading, Stack, Text } from "native-base"

import { useContainerDirection } from "@/util-layout"

import { DashboardCard } from "../dashboard-card/dashboard-card"

export const HomeScreen = () => {
    const [direction, handleLayout] = useContainerDirection(500)

    return (
        <Stack onLayout={handleLayout} space="4" py="4" mx="4">
            <Heading textAlign="center">Welcome back!</Heading>
            <Stack direction={direction} justifyContent="center" space="4">
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
