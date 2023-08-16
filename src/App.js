import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="w-[100vw] min-h-screen overflow-x-hidden overflow-y-auto bg-slate-800 text-slate-300">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
