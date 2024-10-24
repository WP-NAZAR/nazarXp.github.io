import Items from "../Items";
import Navbar from "../Navbar";
import profilePer from '../../assets/images/IMG_20221003_143814_150.webp'

export default function Personal() {
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
                    <h1 className="text-white text-[25px] font-semibold tracking-[4px]">PERSONAL</h1>
                </div>
            </div>
        </>
    )
}