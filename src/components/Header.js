import Navbar from "./Navbar";
import { Image, Spacer }  from "@chakra-ui/react";
import logo from './logo.png';

function Header(){
    return(
        <div className="App-header">
           <Image src={logo} w="100px"/>
           <Spacer/>
            <Navbar/>
        </div>
        
    )
}

export default Header;