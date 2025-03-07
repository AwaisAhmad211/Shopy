import { useShop } from "../Context/Context";
import ProductCard from "../components/ProductCards";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProductList() {
  const {setSearchQuery, filteredProducts, setSelectedCategory } = useShop();
  const location = useLocation();
  const { categoryName } = useParams();

  // URL se search query aur category nikaal ke state update karna
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");

    // Category aur search dono ko sync karna
    if (categoryName) {
      setSelectedCategory(decodeURIComponent(categoryName));
    } else {
      setSelectedCategory(null);
    }

    // Search query handle karna
    if (search !== null) {
      setSearchQuery(search.trim());
    } else {
      setSearchQuery("");
    }
  }, [location.search, categoryName, setSearchQuery, setSelectedCategory]);

  return (
    <main className="w-full md:w-3/4 p-4 grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="flex items-center justify-center text-teal-700 font-bold text-2xl">
          No results found
        </p>
      )}
    </main>
  );
}
