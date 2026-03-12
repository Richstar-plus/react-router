import { Link } from "react-router-dom";

export function ProductsPage() {
  return (
    <>
      <div> Products Page</div>
      <p>Back to <Link to="/">Home</Link></p>
    </>
  );
}
