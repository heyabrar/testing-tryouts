import React from "react";
import axios from "axios";

type Props = {
  data: any;
};

const SingleProduct = ({ data }: Props) => {
  return (
    <div>
      <img src={data?.image} alt={data?.tile} className="w-[200px]" />
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

// ISR Incremental Static Regeneration
export const getStaticPaths = async () => {
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
  const { productId } = params;
  try {
    const url = `https://fakestoreapi.com/products/${productId}`;
    const response = await axios.get(url);
    return {
      props: {
        data: response?.data,
      },
    };
  } catch (error) {
    return {
      revalidate: 10,
      notFound: true,
    };
  }
};

export default SingleProduct;
