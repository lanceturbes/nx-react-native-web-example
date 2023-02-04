import { useCallback, useState } from "react"
import { LayoutChangeEvent } from "react-native/types"

export const useContainerDirection = (minChildWidth: number) => {
    const [direction, setDirection] = useState<
        "row" | "column" | "column-reverse" | "row-reverse"
    >("row")

    const handleLayout = useCallback(
        (e: LayoutChangeEvent) => {
            if (e.nativeEvent.layout.width < minChildWidth) {
                if (direction !== "column") {
                    setDirection("column")
                }
            } else {
                if (direction !== "row") {
                    setDirection("row")
                }
            }
        },
        [direction, minChildWidth]
    )

    return [direction, handleLayout] as const
}
