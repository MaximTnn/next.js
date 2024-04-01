import { Metadata } from "next";

type Props = {
  params: {
      productId: string
  }
}

// имитация получения аголовка из базы с помощью промиса
export const generateMetadata = async ({ params }: Props ): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {resolve(`Iphone ${params.productId}`)}, 100)
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails({ params }: Props) {
    return (
       <h1>Product details {params.productId}</h1>
    );
}