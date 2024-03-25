const Router = ReactRouterDOM.HashRouter;
const { Route, Routes } = ReactRouterDOM;



import { ContactDetails } from "./cmps/ContactDetails.jsx";
import { HomePage } from "./pages/HomePage.jsx";





export function App() {
  return (
    <Router>
      <section className="app">
        <main className="main-layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/contact/:id' element={<ContactDetails />}/>
          </Routes>
        </main>

      </section>
    </Router>

  );
}
