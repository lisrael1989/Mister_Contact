const Router = ReactRouterDOM.HashRouter;
const { Route, Routes } = ReactRouterDOM;



import { HomePage } from "./pages/HomePage.jsx";





export function App() {
  return (
    <Router>
      <section className="app">
        <main className="main-layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

      </section>
    </Router>

  );
}
