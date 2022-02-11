import { Route, Routes } from 'react-router-dom';
import './App.css';
import Creat from './components/Creat';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="creat" element={<Creat />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
