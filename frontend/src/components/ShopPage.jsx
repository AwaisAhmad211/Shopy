import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../Context/Context";
import ProductList from "./ProductList";
import SortSidebar from "./SortSidebar";
import ShopHeader from "./ShopHeader";

export default function ShopPage() {
  const { setSelectedCategory } = useShop();


  const { category } = useParams();
  const decodedCategory = category ? decodeURIComponent(category) : null;

  useEffect(() => {
    setSelectedCategory(decodedCategory);
  }, [decodedCategory, setSelectedCategory]);

  
  return (
    <div className="min-h-screen bg-gray-100">
      <ShopHeader />
   
      <div className="flex flex-col md:flex-row">
        <SortSidebar />
        <ProductList />
      </div>
    </div>
  );
}