import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import BlogPage from "./page/BlogPage";
import ContactPage from "./page/ContactPage";
import AuthPage from "./page/AuthPage";
import CartPage from "./page/CartPage";
import ProductDetailsPage from "./page/ProductDetailsPage";
import BlogDetailsPage from "./page/BlogDetailsPage"
import "./App.css";
import UserPage from "./page/admin/UserPage";
import CategoryPage from "./page/admin/Categories/CategoryPage";
import CreateCategoryPage from "./page/admin/Categories/CreateCategoryPage";
import UpdateCategoryPage from "./page/admin/Categories/UpdateCategoryPage";
import CreateProductPage from "./page/admin/Products/CreateProductPage";
import ProductPage from "./page/admin/Products/ProductPage";
import UpdateProductPage from "./page/admin/Products/UpdateProductPage";
function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
