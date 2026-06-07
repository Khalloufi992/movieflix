import product from "../Product";
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