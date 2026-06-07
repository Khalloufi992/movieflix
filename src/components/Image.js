import product from "../Product";

// This component displays the product image

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "100%" }}
    />
  );
}

export default Image;