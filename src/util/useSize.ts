import { useEffect, useState } from "react"

export default function useSize(selector: string): DOMRect | null {
    const [rect, setRect] = useState<DOMRect | null>(null)
    useEffect(() => {
        const updateRect = () => {
            let newRect = document.querySelector(selector)?.getBoundingClientRect()
            if (newRect) {
                if (newRect.height > 0)
                    setRect(newRect)
            }
            else
                setRect(null)
        }
        updateRect()
        window.addEventListener('resize', updateRect)
        return () => window.removeEventListener('resize', updateRect)
    }, [selector])
    return rect
}