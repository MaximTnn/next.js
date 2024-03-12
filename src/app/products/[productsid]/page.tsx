export default function ProductDetails({
    params
}: {
    params: {
        productsid: string
    }
}) {
    return (
       <h1>Product details {params.productsid}</h1>
    );
}