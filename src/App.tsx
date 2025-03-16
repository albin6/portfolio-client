import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import NotFound from "./pages/NotFound";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
