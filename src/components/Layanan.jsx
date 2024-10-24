import { useState } from "react"
import uiLayanan from '../assets/img/web-development-8734249_1280.png'
import webLayanan from '../assets/img/development-4536630_1280.png'
import siLayanan from '../assets/img/system-152937_1280.png'
export default function Layanan() {

    const LayananKu = [
        {title : 'UI / UX DESIGN', stats : 'Dapatkan Design UI / UX Website Dengan Berbagai Tema Yang Keren, Modern Dan Profesional', iconL : uiLayanan, btnL : 'Berlangganan'},
        {title : 'WEB DEVELOPMENT', stats : 'Dapatkan Design UI / UX Website Dengan Berbagai Tema Yang Keren, Modern Dan Profesional', iconL : webLayanan, btnL : 'Berlangganan'},
        {title : 'OS SERVICES', stats : 'Dapatkan Design UI / UX Website Dengan Berbagai Tema Yang Keren, Modern Dan Profesional', iconL : siLayanan, btnL : 'Berlangganan'}
    ]
    const [cLayanan, set_cLayanan] = useState(false)


    return (
        <>
            <div className="w-full h-[20vh]">
                <div className="w-full h-full flex justify-center text-center">
                    <div className="w-[90%] h-full">
                        <p className="tracking-[5px] text-[12px] text-gray-700">LAYANAN KAMI</p>
                        <h1 className="text-[23px] font-semibold tracking-[2px]">Temukan Solusi Masalah Anda</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-[130vh]">
                <div className="flex flex-wrap justify-center">
                    {LayananKu.map((itemL, indexL) => (
                        <div className="w-[65%] h-[auto] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[20px] my-[10px] p-[20px] text-white" key={itemL}>
                            <div className="my-[5px]">
                                <h1 className="text-center text-[18px] tracking-[3px] font-semibold">{itemL.title}</h1>
                            </div>
                            <div className="my-[5px] flex justify-center">
                                <img src={itemL.iconL} alt="Icon Layanan" className="w-[130px]" />
                            </div>
                            <div className="my-[5px]">
                                <p className="text-justify text-[15px]">{itemL.stats}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button>{itemL.btnL}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}