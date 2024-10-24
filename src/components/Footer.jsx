export default function Footer() {
    return (
        <>
            <div className="w-full h-[65vh] bg-sky-950 p-[20px] text-white">
                <div>
                    <h1 className="text-[30px] font-semibold tracking-[5px]">Nazaruddin</h1>
                </div>
                <div>
                    <p>Perumahan Moncongloe Permai, Blok B53, Moncongloe Lappara, Moncongloe Maros</p>
                </div>
                <div>
                    <p>Email : nazaruddina914@gmail.com</p>
                </div>
                <div className="w-full h-auto flex gap-[20px] my-[20px]">
                    <div>
                        <h1 className="font-semibold text-[18px] tracking-[3px]">Portofolio</h1>
                        <ul className="text-[13px] leading-[25px]">
                            <li><a href="">Tentang</a></li>
                            <li><a href="">Visi, Misi Dan Komitmen</a></li>
                            <li><a href="">Kontak</a></li>
                            <li><a href="">Kebijakan Pengguna</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-[18px] tracking-[3px]">Layanan Kami</h1>
                        <ul className="text-[12px] leading-[25px]">
                            <li><a href="">ISO SERVICES</a></li>
                            <li><a href="">DESIGN UI / UX</a></li>
                            <li><a href="">WEB DEVELOPMENT</a></li>
                            <li><a href="">WEB HOSTING</a></li>
                            <li><a href="">INSTAL APPLICATION</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-auto flex gap-[60px] my-[20px]">
                    <div>
                        <h1 className="font-semibold text-[18px] tracking-[3px]">Produk</h1>
                        <ul className="text-[13px] leading-[25px]">
                            <li><a href="">Portofolio</a></li>
                            <li><a href="">Siakad</a></li>
                            <li><a href="">Company Profile</a></li>
                            <li><a href="">Other</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-[18px] tracking-[3px]">Alamat</h1>
                        <ul className="text-[13px] leading-[25px]">
                            <li><a href="">Maps</a></li>
                            <li><a href="">Gmail</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}