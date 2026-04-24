import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import BookForm from "./pages/BookForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/add-book" element={ <BookForm /> }/>
          <Route path="/edit-book/:id" element={ <BookForm /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
