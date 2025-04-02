import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'



function Dashboard() {

    return (
        <>
            <div className="bg-[#f0f8ff] w-full h-screen"> 
                <Navbar/>
                <Sidebar/>
            </div>

        </>
    )
}

export default Dashboard