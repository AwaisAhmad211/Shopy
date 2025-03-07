import { useShop } from "../Context/Context";

export default function SortSidebar() {
  const { sortOrder, setSortOrder, selectedCategory } = useShop();

  return (
    <aside className="w-full md:w-1/4 p-4 bg-white shadow-md">
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Sort By</h3>
        <button
          className={`w-full p-2 rounded mb-2 ${sortOrder === "lowToHigh" ? "bg-teal-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
          onClick={() => setSortOrder("lowToHigh")}
        >
          Low to High
        </button>
        <button
          className={`w-full p-2 rounded ${sortOrder === "highToLow" ? "bg-teal-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
          onClick={() => setSortOrder("highToLow")}
        >
          High to Low
        </button>
      </div>

      {selectedCategory && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Selected Category</h3>
          <p className="p-2 bg-gray-300 rounded">
            {selectedCategory || "All Categories"}
          </p>
        </div>
      )}
    </aside>
  );
}
