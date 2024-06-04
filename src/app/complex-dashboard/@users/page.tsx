import Card from '@/components/Card/Card';

export default async function Users() {
    // искуственная задержка загрузки компонента
    const result = await new Promise((res) => {
        setTimeout(() => {
            console.log('Users')
            res('Users')
        }, 5000)
    });
    return <Card>Users</Card>
}