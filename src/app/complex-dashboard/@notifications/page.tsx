import Card from '@/components/Card/Card';
import getRandomInt from "@/helpers/getRandomInt";

export default function Notifications() {
    const random = getRandomInt(0, 1)

    // искуственная имитация ошибки
    if (random === 1) {
        throw new Error('Notifications error')
    }

    return <Card>Notifications</Card>
}