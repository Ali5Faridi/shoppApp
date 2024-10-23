function ProductItem() {
  return (
    <div className="border shadow">
      <img className="rounded-t" src="https://picsum.photos/700/400" alt="" />
      <div className="flex justify-between p-4">
        <h3>product name</h3>
        <span>55$</span>
      </div>
      <div className="p-3">
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat,
          voluptatem eaque facere voluptates quos?
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
