import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {
  allProducts: any;
};

const Products = ({ allProducts }: Props) => {
  const router = useRouter();
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [allProducts, setAllProducts] = useState([]);

  //   const handleGetProducts = async () => {
  //     try {
  //       setIsLoading(true);
  //       const url = `https://fakestoreapi.com/products`;
  //       const response = await axios.get(url);
  //       if (response?.data) {
  //         setAllProducts(response?.data);
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     handleGetProducts();
  //   }, []);

  return (
    <div>
      {/* {isLoading ? (
        <h1>LOADING.....</h1>
      ) : ( */}
      <div className="grid grid-cols-4">
        {allProducts?.map((item: any) => {
          return (
            <div
              key={item?.id}
              onClick={() => router.push(`/product/${item?.id}`)}
            >
              <h1>Kya Haal</h1>
              <img src={item?.image} alt={item?.title} className="w-[100px]" />
              <h2>{item?.title}</h2>
            </div>
          );
        })}
      </div>
      {/* )} */}
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const url = `https://fakestoreapi.com/products`;
    const response = await axios.get(url);
    return {
      props: {
        allProducts: response?.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: true,
    };
  }
};

export default Products;
