import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Logo = () => {
    const nav = useNavigate()


  return <div onClick={()=>{nav('/')}} className="logo-div"><AiFillPlayCircle className="logo"/>
  <span className="logo-desc">Movie&TV</span></div>;
}

export default Logo