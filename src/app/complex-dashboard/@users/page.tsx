import Card from '@/components/Card/Card';

export default async function Users() {
    // искуственная задержка загрузки компонента
    const result = await new Promise((res) => {
        setTimeout(() => {
            res('Users')
        }, 2000)
    });
    return <Card>Users</Card>
}