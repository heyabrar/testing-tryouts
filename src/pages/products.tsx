import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {
  myProducts: any;
};

const Products = ({ myProducts }: Props) => {
  console.log({ myProducts }); // From SERVER

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleGetProducts = async () => {
    try {
      const url = `https://fakestoreapi.com/products`;
      const response = await axios.get(url);
      if (response?.data) {
        setProducts(response?.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {isLoading ? (
        <p className="h-[100vh] flex justify-center items-center">
          Loading....
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-[20px]">
          {products?.map((item: any) => {
            return (
              <div
                className="border"
                key={item.id}
                onClick={() => router.push(`/product/${item?.id}`)}
              >
                {item?.title}
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-[100px] mx-auto"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const url = `https://fakestoreapi.com/products`;
//     const response = await axios.get(url);
//     return {
//       props: {
//         myProducts: response?.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         notFound: true,
//       },
//     };
//   }
// };

export default Products;
