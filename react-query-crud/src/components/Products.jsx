import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProduct, getProducts, updateProduct } from '../api/productsAPI';

function Products() {
  const {
    isPending,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (products) => products.sort((a, b) => a.id - a.id),
  });
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-10 flex w-full max-w-sm flex-col gap-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </p>

          <div className="flex justify-between items-center">
            <div>
              <input
                id={product.id}
                type="checkbox"
                checked={product.inStock}
                onChange={(e) => {
                  updateProductMutation.mutate({
                    ...product,
                    inStock: e.target.checked,
                  });
                }}
                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor={product.id}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                In Stock
              </label>
            </div>{' '}
            <button
              onClick={() => {
                deleteProductMutation.mutate(product.id);
              }}
              className="me-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
