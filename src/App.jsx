import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageList from './pages/PageList';
import PageDetail from './pages/PageDetail';
import PageUpdate from './pages/PageUpdate';
import PageCreate from './pages/PageCreate';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageList />} />
      <Route path="/detail" element={<PageDetail />} />
      <Route path="/update" element={<PageUpdate />} />
      <Route path="/create" element={<PageCreate />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;