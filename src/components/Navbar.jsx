import { useState } from "react"
import closeToggle from '../assets/icons/icons8-menu-50.png'
import openToggle from '../assets/icons/icons8-close-50.png'
import profileNav from '../assets/images/IMG_20221003_143814_150.webp'

import iconHome from '../assets/icons/icons8-home-40 (1).png'
import iconBrand from '../assets/icons/icons8-smart-40.png'
import iconApps from '../assets/icons/icons8-apps-40.png'
import iconMess from '../assets/icons/icons8-message-40.png'
import iconPro from '../assets/icons/icons8-folder-40.png'
import {Link} from 'react-router-dom'
export default function Navbar() {

    const brand = [
        'Menu'
    ]

    const Personal = [
        {imgP : profileNav, nameP : 'Nazaruddin', stats : 'Personal', btnP : 'Lihat Selengkapnya', path : '/Personal'}
    ]

    const menu = [
        {iconM : iconHome,name : 'Home', pathM : '/'},
        {iconM : iconBrand,name : 'Brand'},
        {iconM : iconApps,name : 'Apps'},
        {iconM : iconMess,name : 'Contact'},
        {iconM : iconPro,name : 'Ask Project'}
    ]
    const [cMenu, set_cMenu] = useState(false)
    const toggleMenu = () => {
        set_cMenu(!cMenu)
    }


    return (
        <>
            <div className="w-full h-[8vh] flex items-center p-[10px]">
                <div className="w-full h-full flex justify-between items-center">

                    <div>
                        <h1 className="text-[24px] font-semibold tracking-[2px] text-gray-700">Portofolio</h1>
                    </div>

                    <button onClick={toggleMenu} className="bg-[white] w-auto h-auto p-[5px] flex justify-center items-center border-[1px]">
                        <img src={cMenu ? openToggle : closeToggle} alt="Toggle Menu" className="w-[25px]" />
                    </button>
                    {cMenu && (
                       <div className="w-[250px] pt-[30px] h-screen bg-white border-[1px] border-black absolute left-0 bottom-0 leading-[40px]">
                            
                            <div className="w-[30px] h-[30px] bg-sky-950 rounded-full absolute right-0 top-0 mr-[3px] mt-[30px] flex justify-center items-center">
                                <button className="text-white font-bold" onClick={toggleMenu}>
                                    <img src={openToggle} alt="" className="w-[20px]" />
                                </button>
                            </div>

                            <div className="w-full h-[10vh] p-[10px]">
                                {brand.map((iBrand, inBrand) => (
                                    <ul key={inBrand}>
                                        <li><a href="">{iBrand}</a></li>
                                    </ul>
                                ))}
                            </div>

                            <div className="w-full h-[20vh] p-[10px]">
                                {Personal.map((iPerson, inPerson) => (
                                    <div key={inPerson}>
                                        <div className="flex gap-[30px]">
                                            <div>
                                                <img src={iPerson.imgP} alt="imgPersonal" className="w-[40px] h-[40px] rounded-full" />
                                            </div>
                                            <div className="leading-[25px]">
                                                <h1>{iPerson.nameP}</h1>
                                                <p>{iPerson.stats}</p>
                                            </div>
                                        </div>
                                        <div className="w-[95%] mt-[20px] h-auto flex justify-center">
                                            <button className="w-full h-auto border-[1px] border-black">
                                                <Link to={iPerson.path}>{iPerson.btnP}</Link>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full h-[auto] leading-[50px]">
                                {menu.map((itemM, indexM) => (
                                    <ul key={indexM} className={`${itemM.name === 'Home' ? 'bg-gradient-to-tr from-blue-500 to-purple-500 text-white' : ''} pl-[20px] flex items-center gap-[30px]`}>
                                        <img src={itemM.iconM} alt="Icon" className="w-[30px] h-[30px]" />
                                        <li>
                                            <Link to={itemM.pathM}>{itemM.name}</Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                       </div>
                    )}
                </div>
            </div>
        </>
    )
}