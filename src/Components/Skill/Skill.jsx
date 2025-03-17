import Marquee from 'react-fast-marquee';
import './skill.css'

const Skill = () => {
    
    return (
        <div id='skills' className=" mb-8 md:mb-12 ">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Skill</h2>
            <Marquee>
                <div className="image-container flex justify-evenly sm:gap-2 lg:gap-8">
                    <img className="" src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="Html5" />
                    <img className='' src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="Css3" />
                    <img className='' src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" alt="Tailwind Css" />
                    <img className='' src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" />
                    <img className='' src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React" />
                    <img className='' src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" alt="Express Js" />
                    <img className='' src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node Js" />
                    <img className='' src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="Mongo Db" />
                </div>
            </Marquee>
        </div>
    );
};

export default Skill;