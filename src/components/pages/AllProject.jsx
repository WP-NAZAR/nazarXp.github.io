import { useState } from "react";
import Items from "../Items";
import Navbar from "../Navbar";
import {Link} from 'react-router-dom'

export default function AllProject() {
    const selectPro = [
        {menuP : 'All', Pathp : ''},
        {menuP : 'Folders', Pathp : ''},
        {menuP : 'Designs', Pathp : ''},
        {menuP : 'Images', Pathp : ''}
    ]

    const allPro = [
        {nameAll : 'Project A', imgAll : 'B'},
        {nameAll : 'Project A', imgAll : 'B'},
        {nameAll : 'Project A', imgAll : 'B'},
        {nameAll : 'Project A', imgAll : 'B'},
        {nameAll : 'Project A', imgAll : 'B'},
        {nameAll : 'Project A', imgAll : 'B'}
    ]

    const [allProject, set_allProject] = useState(true)

    const allDesign = [
        {nameDes : 'Project A'},
        {nameDes : 'Project A'},
        {nameDes : 'Project A'},
        {nameDes : 'Project A'},
        {nameDes : 'Project A'},
        {nameDes : 'Project A'}
    ]

    const [cDesign, set_cDesign] = useState(false)
    const btnDesign = () => {
        set_cDesign(!cDesign)
    }
    return (
        <>
            <div className="w-full h-[18vh] bg-sky-950">
                <div>
                    <Navbar/>
                    <div className="w-full h-auto absolute z-50">
                        <Items/>
                    </div>
                </div>
                <div className="p-[15px]">
                    <h1 className="text-white text-[25px] font-semibold tracking-[4px]">PROJECT</h1>
                </div>
            </div>
            <div className="w-full h-[auto] flex justify-center items-center gap-[10px]">
                <div className="w-full h-full flex justify-center items-center gap-[10px]">
                    {selectPro.map((itemSP, indexSP) => (
                        <ul key={indexSP} className={`${itemSP.menuP === 'All' ? 'border-b-purple-500 border-b-[1px]' : 'none'} p-[10px]`}>
                            <li>
                                <Link to={itemSP.Pathp} onClick={itemSP.menuP === 'Designs' ? btnDesign : 'none'}>{itemSP.menuP}</Link>
                            </li>
                        {/* Design All */}
                        {itemSP.menuP === 'Designs' && cDesign && (
                                <div className="w-full h-[auto] p-[10px] absolute left-0 right-0 z-10 mt-[20px]">
                                    <div className="flex justify-between px-[20px] mb-[20px]">
                                        <h1>UI / UX - WEBSITE</h1>
                                        <p>See All</p>
                                    </div>
                                    <div className="flex justify-center flex-wrap gap-[10px]">
                                        {allDesign.map((itemDes, indexDes) => (
                                            <ul key={indexDes} className="w-[150px] h-[200px] border-[1px] bg-gradient-to-tr from-blue-500 to-purple-500">
                                                <li>{itemDes.nameDes}</li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </ul>
                    ))}
                </div>
            </div>
            {/* <div className="w-full h-[100vh] border-[1px] mt-[10px]">
                <div className="flex justify-between px-[20px] pt-[5px]">
                    <h1>COMPANY PROFILE</h1>
                    <p>See All</p>
                </div>
                <div className="mt-[20px]">
                    {allProject && (
                        <div className="flex flex-wrap justify-center items-center gap-[10px]">
                            {allPro.map((itemAll, indexItemAll) => (
                                <ul key={indexItemAll} className="w-[100px] h-[130px] bg-red-600">
                                    <li>{itemAll.nameAll}</li>
                                </ul>
                            ))}
                        </div>
                    )}
                </div>
            </div> */}
        </>
    )
}