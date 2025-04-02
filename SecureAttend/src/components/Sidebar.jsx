import DashboardICon from '../assets/DashboardIcon.svg'
import AttendanceIcon from '../assets/AttendanceIcon.svg'
import ReportIcon from '../assets/ReportIcon.svg'
import AdminIcon from '../assets/AdminIcon.svg'
import EmployeeIcon from '../assets/EmployeeIcon.svg'
import SettingIcon from '../assets/SettingIcon.svg'
import LogOutIcon from '../assets/LogOutIcon.svg'

function Sidebar() {

    return (
        <div className=' bg-white border-1 border-[#6C757D] w-64 h-screen fixed inset-y-12 left-0'>
            <div className='p-4'>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row gap-5 cursor-pointer font-semibold text-[#012970]'>
                    <img src={DashboardICon} />
                    Dashboard
                </div>
                <div >
                    <h1 className='text-[#899BBD]'>
                        ANALYZE
                    </h1>
                </div>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={AttendanceIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Attendance</button>
                </div>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={ReportIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Report</button>
                </div>
                <div >
                    <h1 className='text-[#899BBD]'>
                        MANAGE
                    </h1>
                </div>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={AdminIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Admin</button>
                </div>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={EmployeeIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Employee</button>
                </div>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={SettingIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Settings</button>
                </div>
                <hr className='mt-2 mb-2'/>
                <div className='hover:bg-[#F6F9FF] text-2xs rounded-[4px] hover:text-[#4154F1] p-2 flex flex-row'>
                    <img src={LogOutIcon} />
                    <button className='pl-2 text-[#012970] font-semibold'>Log Out</button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar