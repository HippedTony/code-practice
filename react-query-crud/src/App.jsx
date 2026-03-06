import ProductForm from "./components/ProductForm"
import Products from "./components/Products"

function App() {
  return (
    <div className="mx-auto mt-10 flex h-full w-4/6 flex-col items-center justify-center">
      <ProductForm />
      <Products />
    </div>
  )
}

export default App