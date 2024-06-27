import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchData = (url: string) => {
  return useQuery([url], () => fetchData(url));
};

export default useFetchData;
