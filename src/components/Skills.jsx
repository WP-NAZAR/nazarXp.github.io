import iconHtml from '../assets/icons/icons8-html-50.png'
import iconCss from '../assets/icons/icons8-css-50.png'
import iconJs from '../assets/icons/icons8-js-50.png'
import iconReact from '../assets/icons/icons8-react-js-50.png'
import iconBoots from '../assets/icons/icons8-bootstrap-50.png'
import iconTailw from '../assets/icons/icons8-tailwind-css-50.png'
export default function Skills() {
    return (
        <>
            <div className="w-full h-[7vh] my-[1px]">
                <div className="w-full h-full flex justify-center items-center gap-[25px]">
                    <div className="w-[40px] h-[40px]">
                        <img src={iconHtml} alt="Icon Html" />
                    </div>
                    <div className="w-[40px] h-[40px]">
                        <img src={iconCss} alt="Icon Css" />
                    </div>
                    <div className="w-[40px] h-[40px]">
                        <img src={iconJs} alt="Icon Js" />
                    </div>
                    <div className="w-[40px] h-[40px]">
                        <img src={iconReact} alt="Icon Js" />
                    </div>
                    <div className="w-[40px] h-[40px]">
                        <img src={iconBoots} alt="Icon Js" />
                    </div>
                    <div className="w-[40px] h-[40px]">
                        <img src={iconTailw} alt="Icon Js" />
                    </div>
                </div>
            </div>
        </>
    )
}