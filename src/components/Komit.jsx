import { useState, useEffect } from "react"

export default function Komit() {
    
    const [cKomit, set_cKomit] = useState(false)
    const myKomit = [
        'JUJUR',
        'PROFESIONAL',
        'KUALITAS',
        'FOKUS'
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    // Mengubah slide secara otomatis setiap 2 detik
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === myKomit.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500); // Ganti setiap 2 detik
  
      // Membersihkan interval ketika komponen tidak lagi aktif
      return () => clearInterval(interval);
    }, [myKomit.length]);

    return (
        <>
            <div className="w-full h-[60vh] flex justify-center">
                <div className="w-[90%] h-[40vh] border-[1px] border-black flex justify-center items-center rounded-[20px]">
                    <div className="w-full h-full">
                        <div className="w-full h-[12vh] flex justify-center items-center">
                            <h1 className="text-[28px] font-semibold tracking-[4px]">Komitmen Kami</h1>
                        </div>
                        <div className="w-full h-[12vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold tracking-[5px]">
                            <div>
                                <h1 className="text-[30px]">{myKomit[currentIndex]}</h1>
                            </div>
                        </div>
                        <div className="w-full h-[12vh] flex justify-center items-center">
                            <button className="w-[200px] h-[40px] border-black border-[1px] tracking-[1px]">Lihat Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}