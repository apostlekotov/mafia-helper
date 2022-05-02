import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Main from "./components/Main";
import Play from "./components/Play";
import NotFound from "./components/NotFound";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='play' element={<Play />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
