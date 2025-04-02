import './App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate ()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Invalid !')
            return;
        
        }
        else {
            navigate("/dashboard")
        } 

        console.log("Username:", username)
        console.log("Password:", password)

        setError("");
    }
    
    return (
        <>
            <div className="bg-[#f0f8ff] w-full h-screen flex justify-center items-center">
                <h1 className='bg-[#6C757D] h-12 pl-8 text-2xl text-white font-semibold content-center absolute inset-x-0 top-0'>
                    SecureAttend
                </h1>
                <div className="p-10 bg-white border-1 border-[#6C757D] w-2/6 rounded-sm ">
                    <h1 className='text-center mb-2 text-2xl font-semibold'>Login</h1>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    {/* Username */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className=" pb-3.5 block text-gray-700 font-medium">
                                Username
                            </label>
                            <input type="text"
                                className="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder='Enter Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {/* Password */}
                        <div>
                            <label className="pt-6 pb-3.5 block text-gray-700 font-medium">
                                Password
                            </label>
                            <input type="password"
                                className='p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Remember me */}
                        <div className='pt-6'>
                            <input type='checkbox'
                                className='align-middle h-4.5 w-4.5' />
                            <label> Remember me</label>
                        </div>
                        {/* login button */}
                        <div className='pt-6'>
                            <div className=" px-3 py-1 inline-block justify-left bg-[#4154F1] text-white rounded-sm hover:bg-[#003092]">
                                <button type='submit'>Login</button>
                            </div>
                        </div>
                        {/* Forgot Password */}
                        <div className='pt-6 text-sm opacity-75'>
                            <a className='hover:text-[#0DCAF0]' href='' > Forgot password</a>
                        </div>
                        <div className='pt-6 '>
                            <label> Don't have an account? </label>
                            <a className='text-[#0DCAF0] hover:text-[#003092]' href="" > Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login