import axios from "./axios.config";

const getProducts = async (page: number, pageSize: number) => {
  const data = await axios.get(`/book/list?page=${page}&pageSize=${pageSize}`);
  return data;
};
const deleteProduct = async (id: string) => {
  const data = await axios.delete(`/products/${id}`);
  return data;
};
export { getProducts, deleteProduct };

// import axios from "./axios.config";
// import useSWR from "swr";

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// const getProducts = (page: number, pageSize: number) => {
//   const { data, error } = useSWR(
//     `/book/list?page=${page}&pageSize=${pageSize}`,
//     fetcher
//   );

//   return {
//     products: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// const deleteProduct = async (id: string) => {
//   const response = await axios.delete(`/products/${id}`);
//   return response.data;
// };

// export { getProducts, deleteProduct };
