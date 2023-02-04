import { Box } from "native-base"
import {
    ColorType,
    ResponsiveValue
} from "native-base/lib/typescript/components/types"

export const DashboardCard = ({
    color,
    children
}: {
    color: ResponsiveValue<ColorType>
    children: JSX.Element | JSX.Element[]
}) => (
    <Box
        bg={color}
        p="12"
        rounded="lg"
        minW="56"
        justifyContent="center"
        alignItems="center"
    >
        {children}
    </Box>
)
