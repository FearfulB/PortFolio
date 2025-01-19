import { Link } from "react-scroll";

export default function Skill(props){
    return (
        <div className={`skillBackground rounded-full border-2 text-center ${props.color}`}>
            <Link to={props.link} smooth={true}   className="px-4 text-white">{props.text}</Link>
        </div>
    )
}