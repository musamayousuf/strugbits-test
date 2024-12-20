import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { useDataContext } from "./context/dataContext";

function App() {
  return (
    <div className="">
      <Header />
      <div className="px-4 sm:px-12 lg:px-44 mt-6">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
