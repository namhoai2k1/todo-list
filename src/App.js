import { Route, Routes } from 'react-router-dom';
import './App.css';
import Author from './components/Author';
import Blogdetails from './components/Blogdetails';
import Creat from './components/Creat';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="creat" element={<Creat />} />
                    <Route path="author" element={<Author />} />
                    <Route path="blog/:id" element={<Blogdetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
