import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MailProvider } from "./context/MailContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <MailProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MailProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
