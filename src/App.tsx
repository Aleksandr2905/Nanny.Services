import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Nannies } from "./pages/Nannies"
import { Favorites } from "./pages/Favorites"
import { Layout } from "./components/Layout/Layout"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
