import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
      <p>Go to the <Link to="/products">Products Page</Link>.</p>
    </div>
  );
}

export default HomePage;