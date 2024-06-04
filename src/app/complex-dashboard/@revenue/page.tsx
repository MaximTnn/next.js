'use client'

import Card from "@/components/Card/Card";
import { useState } from "react";

export default function Revenue() {
    const [count, setCount] = useState(0)
    return (
        <Card>
            Revenue
            {count}
            <button onClick={() => setCount(count + 1)}>increent</button>
        </Card>
    )
}