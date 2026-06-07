import product from "../Product";

// This component displays only the product name

function Name() {
  return <h3>{product.name}</h3>;
}

export default Name;