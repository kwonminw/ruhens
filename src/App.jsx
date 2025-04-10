import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header, MainTop } from "./components";
import { Main } from "./pages";
import './App.css';

const Layout = () => {
  return (
    <div id="wrapper">
      <MainTop />
      <Header />
      <Outlet />
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
