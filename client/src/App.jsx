import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MailProvider } from "./context/MailContext";

function App() {
  return (
    <>
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
