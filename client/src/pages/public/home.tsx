import React from "react";
import Slider from "~/components/container/slider";
import Book from "~/components/container/book";
import { getProducts } from "~/services/product.service";
import { Pagination } from "antd";

const Home: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getProducts().then((res: any) => {
      setProducts(res);
    });
  }, []);
  console.log("check",products);
  return (
    <>
      <div className="bg-light dark:bg-[black] min-h-screen relative min-w-full justify-center text-center pb-2 ">
        <div className="w-[80vw] bg-black flex justify-center text-amber-50 align-middle m-auto relative top-2 h-[40vh] mb-7">
          <Slider />
        </div>
        <div className="w-[80vw] text-amber-50 align-middle m-auto relative top-2 min-h-[80vh] mb-6 flex flex-row flex-wrap gap-1 container mx-auto">
          {products.map((product: any, index:number) => {
            return (
              <Book
                key={index}
                title={product.Tittle}
                rating={product.Rating}
                price={product.Price}
                image={product.Image}
                _id={product._id}
                author={product.Author}
              />
            );
          })}
        </div>
        <Pagination
          defaultCurrent={6}
          total={164}
    
        />
      </div>
    </>
  );
};

export default Home;
