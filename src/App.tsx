import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Nannies } from "./pages/Nannies/Nannies"
import { Favorites } from "./pages/Favorites/Favorites"


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nannies" element={<Nannies />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
