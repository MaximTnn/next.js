import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link href='/blog'>Blog</Link> 
            <Link href='/products'>Products</Link>
        </div>
    )
}

// Базовая иерархия компоннетов в Next.js
// <Layout>
//     <Template>
//         <ErrorBoundary fallback={<Error />}>
//             <Suspense fallback={<Loading />}>
//                 <ErrorBoundary fallback={<NotFound />}>
//                     <Page />
//                 </ErrorBoundary>
//             </Suspense>
//         </ErrorBoundary>
//     </Template>
// </Layout>