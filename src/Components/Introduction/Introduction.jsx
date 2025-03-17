import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row-reverse my-8 md:my-12 gap-5 md:gap-0">
            <div className="md:w-1/2">
                <img className="rounded-[20px] object-fill border w-44 mx-auto md:w-60" src="https://i.ibb.co.com/HCZXRBM/nurul-faiyazjpg-Copy.jpg" alt="Nurul Faiyaz" />
            </div>
            <div className="flex flex-col justify-center text-xl md:text-2xl space-y-2 md:space-y-4">
                <p>Hello, I am</p>
                <h2 className="font-bold ">Nurul Faiyaz</h2>
                <h3>Mern Stact Developer</h3>
                <p className="text-base">I make web applications both alligent and functional</p>

                <div className="flex gap-4">
                    <Link to="https://www.linkedin.com/in/nurul-faiyaz/" className="w-10 md:w-16"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" /></Link>
                    <Link to="https://github.com/NurulFaiyaz" className="w-10 md:w-16"><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="Github" /></Link>
                </div>

                <button className="btn btn-lg w-fit">Resume</button>
            </div>
        </div>
    );
};

export default Introduction;