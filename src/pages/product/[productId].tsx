import axios from "axios";
import React from "react";

type Props = {
  singleProductData: any;
};

// ISR (Incremental Static Regeneration)
const SingleProductPage = ({ singleProductData }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <img
          src={singleProductData?.image}
          alt={singleProductData?.title}
          className="w-[100px] mx-auto"
        />
        <h1 className="text-center">{singleProductData?.title}</h1>
      </div>
    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { productId: string };
}) => {
  try {
    const url = `https://fakestoreapi.com/products/${params.productId}`;
    const response = await axios.get(url);
    return {
      props: {
        singleProductData: response?.data,
        revalidate: 303939399833,
      },
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: true,
    };
  }
};

export default SingleProductPage;
