import axios from "./axios.config";

const getProducts = async () => {
  const data = await axios.get("/book/getall");
  return data;
};
const deleteProduct = async (id: string) => {
  const data = await axios.delete(`/products/${id}`);
  return data;
};
export { getProducts, deleteProduct };
