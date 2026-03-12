import { useParams } from "react-router-dom";

export function  ProductDetailsPage() {
  const params = useParams();
  return (
    <div>
      <h1>Product Details Page</h1>
      <h3>Product ID: {params.productId}</h3>
      <p>This page will show details for a specific product.</p>
    </div>
  );
}