const Router = ReactRouterDOM.HashRouter;
const { Route, Routes } = ReactRouterDOM;



import { HomePage } from "./pages/HomePage.jsx";
import { ContactIndex } from "./pages/ContactIndex.jsx";





export function App() {
  return (
    <Router>
      <section className="app">
        <main className="main-layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactIndex />} />
          </Routes>
        </main>

      </section>
    </Router>

  );
}
