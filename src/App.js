import AppMain from './Components/AppMain/appmain.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './Components/Book/book.js';
import Trending from './Components/TrendingBooks/trendingbooks.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<AppMain />} >
          <Route index element={<Trending />} />
          <Route path = "book" element={<Book />} />
        </Route >
        <Route path="/openlibrary-org-react-client" element={<AppMain />}>
          <Route index element={<Trending />} />
          <Route path = "book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
