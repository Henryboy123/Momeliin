import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";

const items: string[] = [
  "New York",
  "San Francisco",
  "Tokyo",
  "London",
  "Paris",
];

function App() {
  return (
    <div>
      <Navbar items={items} />
      <ShopPage />
    </div>
  );
}

export default App;
