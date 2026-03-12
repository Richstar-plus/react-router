import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
      <p>
        <button onClick={navigateHandler}>Go to Products Page</button>
      </p>
    </div>
  );
}

export default HomePage;