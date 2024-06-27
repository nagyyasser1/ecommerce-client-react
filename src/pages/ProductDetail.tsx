import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useFetchData(`/api/products/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
      <p>{data.price}</p>
    </div>
  );
};

export default ProductDetail;
