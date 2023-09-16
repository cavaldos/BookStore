import axios from "./axios.config";

const getUser = async () => {
  const data = await axios.get("/user/getall");
  return data;
};
const deleteProduct = async (id: string) => {
  const data = await axios.delete(`/products/${id}`);
  return data;
};
export { getUser, deleteProduct };
