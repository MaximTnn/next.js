import Card from '@/components/Card/Card';
import getRandomInt from "@/helpers/getRandomInt";
import Link from 'next/link';

export default function Notifications() {
    const random = getRandomInt(0, 1)

    // // искуственная имитация ошибки
    // if (random === 1) {
    //     throw new Error('Notifications error')
    // }

    return (
        <Card>
            <h2>Notifications</h2>
            <Link href="/complex-dashboard/archived">Archiver</Link>
        </Card>
    )
}