import iconHome from '../assets/icons/icons8-home-26.png'
import iconProject from '../assets/icons/icons8-folder-25.png'
import iconPlush from '../assets/icons/icons8-add-30.png'
import iconTemplate from '../assets/icons/icons8-template-48.png'
import iconKing from '../assets/icons/icons8-crown-30.png'
import {Link} from 'react-router-dom'
export default function Items() {

    const menuItem =[
        {iconI : iconHome, menuI : 'Home', Path : '/'},
        {iconI : iconProject, menuI : 'Project', Path : '/AllProject'},
        {iconI : iconTemplate, menuI : 'Template', Path : '/Template'},
        {iconI : iconKing, menuI : 'Pro'},
    ]

    return (
        <>
            <div className="w-full h-[8vh] bg-sky-950 fixed bottom-0 border-t-[1px]">
                <div className="w-full h-full flex justify-center items-center gap-[60px] text-white">
                    {menuItem.map((item, index) => (
                        <div key={index} className="flex justify-center items-center text-center">
                            <div>
                               <Link to={item.Path}>
                                    <div className='flex justify-center items-center'>
                                        <img src={item.iconI} alt="Icon Item" className='w-[20px]' />
                                    </div>
                                    <div>
                                        <button className='text-[13px]'>
                                            <h1>{item.menuI}</h1>
                                        </button>
                                    </div>
                               </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}