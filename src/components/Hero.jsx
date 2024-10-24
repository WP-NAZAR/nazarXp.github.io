import profileHero from '../assets/images/IMG_20221003_143814_150.webp'
function Hero() {
    
    return (
        <>
            <div className="w-full h-[auto] flex justify-center items-center p-[10px]">
                <div className="w-[96%] h-full p-[15px] bg-gradient-to-r from-[#238ad8] to-purple-700 text-white rounded-[20px]">
                    <div>
                        <h1 className="text-[28px] text-center font-semibold tracking-[2px]">Hi All, WELCOME!</h1>
                    </div>
                    <div className='w-full h-auto'>
                        <h3 className='text-[16px] font-semibold tracking-[2px] text-center'>I'M Nazaruddin | Web Developer</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, optio culpa. Perferendis unde possimus nostrum aperiam labore ullam, obcaecati reiciendis!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero