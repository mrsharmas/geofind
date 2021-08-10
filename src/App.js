import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";
import "./App.css";
import ResultCard from "./ResultCard";
import { useContext } from "react";
import { DataLayer } from "./DataLayer";
function App() {
  const { state } = useContext(DataLayer);
  return (
    <div>
      <Navbar />
      <Search />
      {state.success ? <ResultCard /> : null}
      <Footer />
    </div>
  );
}

export default App;
