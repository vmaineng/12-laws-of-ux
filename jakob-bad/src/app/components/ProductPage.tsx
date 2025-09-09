const ProductPage = () => {
  return (
    <div className="pb-16">
      <h1 className="text-3xl font-bold text-center mt-4">
        Our Amazing Product
      </h1>
      {[...Array(20)].map((_, i) => (
        <p key={i} className="p-4">
          This is paragraph {i + 1}. Scroll down to see how the fixed bottom
          navbar behaves. You'll have to scroll all the way back up to click a
          new link. Isn't that inconvenient?
        </p>
      ))}
    </div>
  );
};

export default ProductPage;
