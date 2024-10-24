import sertifikat1 from '../assets/img/Sertifikat.jpeg'
export default function Sertifikat() {
    return (
        <>
            <div className="w-full h-[25vh] text-sky-950">
                <div className="flex justify-between p-[10px]">
                    <h1>Sertifikat</h1>
                    <p>See all</p>
                </div>
                <div className="flex justify-center items-center gap-[20px] py-[10px]">
                    <div className="w-[90px] h-[120px] bg-blue-400">
                        <img src={sertifikat1} alt="Sertifikat..." />
                    </div>
                    <div className="w-[90px] h-[120px] bg-blue-400">
                        <img src={sertifikat1} alt="Sertifikat..." />
                    </div>
                    <div className="w-[90px] h-[120px] bg-blue-400">
                        <img src={sertifikat1} alt="Sertifikat..." />
                    </div>
                </div>
            </div>
        </>
    )
}