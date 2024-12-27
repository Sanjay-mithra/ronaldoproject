import { FaHeart } from "react-icons/fa";

function Footer(){
    return(
            <div className=" text-center bg-dark py-3  text-white">
        <p className="text-center mt-2">© 2024 Cristiano Ronaldo Portfolio | Designed with 
            <i>
            <FaHeart className="text-danger"/> 
            </i></p>
      </div>
    )
}

export default Footer;