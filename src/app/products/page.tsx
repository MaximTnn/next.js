import Link from "next/link"

export default function ProductList() {
    return (
        <div>
            <Link href='/'>Home</Link>
            <h1>Product List</h1>
            <h2><Link href='/products/1'>Product 1</Link></h2>
            <h2><Link href='/products/2'>Product 2</Link></h2>
            <h2><Link href='/products/3' replace>Product 3 (link with atribute replace)</Link></h2>
            {/* replace заменяет историю браузера на текущую, таким образом стек истории обнуляется и кнопка назад в браузере переносит нас на главную страницу */}
        </div>
    );
}