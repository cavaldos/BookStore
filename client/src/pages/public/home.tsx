import React from "react";
import Slider from "~/components/container/slider";
import Book from "~/components/container/book";
import { getProducts } from "~/services/product.service";
import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { useMemo } from "react";

const Home: React.FC = () => {
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  // const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = getProducts(currentPage, pageSize)
      .then((res: any) => {
        setProducts(res.books);
        setTotalPages(res.totalPages);
        setPageSize(res.pageSize);
        console.log("rest", res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      fetchProducts;
    };
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const MemoizedBook = useMemo(
    () => (
      <Suspense fallback={<div>Loading...</div>}>
        {products.map((product: any, index: number) => (
          <Book
            key={index}
            title={product.Tittle}
            rating={product.Rating}
            price={product.Price}
            image={product.Image}
            _id={product._id}
            author={product.Author}
          />
        ))}
      </Suspense>
    ),
    [products]
  );

  return (
    <>
      <div className="bg-light dark:bg-[black] min-h-screen relative min-w-full justify-center text-center pb-2 ">
        <div className="w-[80vw] bg-black flex justify-center text-amber-50 align-middle m-auto relative top-2 h-[40vh] mb-7">
          <Slider />
        </div>
        <div className="w-[80vw] text-amber-50 align-middle m-auto relative top-2 min-h-[80vh] mb-6 flex flex-row flex-wrap gap-1 container mx-auto">
          {MemoizedBook}
        </div>
        <Pagination
          current={currentPage}
          total={totalPages * pageSize}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
