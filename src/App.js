
import './App.css';
import Header from "./Components/Header/Header";
import Shopnow from "./Components/ShopNow/ShopNow";
import MayLike from "./Components/MayLike/MayLike";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Shopnow />
      <MayLike />
      <ProductList />
    </div>
  );
}
export default App;
