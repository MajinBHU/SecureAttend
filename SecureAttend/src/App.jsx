import Login from './Login'
import Dashboard from './Dashboard'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </>
    )

}

export default App