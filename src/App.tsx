import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Episodes from "./pages/episodes";
import Characters from "./pages/characters";
import ErrorPage from "./error-page";
import Season from "./pages/season";
import Episode from "./pages/episode";
import './scss/index.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="episodes" element={<Episodes />} />
      <Route path="episodes/season/:seasonId/" element={<Season />} />
      <Route path="episodes/:episodeId/" element={<Episode />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
