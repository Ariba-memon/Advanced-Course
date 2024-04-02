
import './App.css';
import { Routes,BrowserRouter,Route ,Switch} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Bot from './Components/Bot';
function App() {
  return (
<BrowserRouter>
<Navbar />


<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />



</Routes>
<Bot />
<Footer />
</BrowserRouter>
  );
}

export default App;
