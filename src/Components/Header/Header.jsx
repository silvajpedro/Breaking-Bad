import { useRef, useEffect, useState } from 'react';
import './Header_style.scss'
import Logo from "../../assets/Logo_BD.png"
import Fundo1 from "../../assets/fundo1.jpg"
import Fundo2 from "../../assets/fundo2.jpg"
import Fundo3 from "../../assets/fundo3.jpg"
import Fundo4 from "../../assets/fundo4.jpg"
import Fundo5 from "../../assets/fundo5.jpg"
import Fundo6 from "../../assets/fundo6.jpg"
export default function Header() {
const Fundo = useRef(null)
const [countFundo, setCountFundo] = useState(0)

useEffect(()=>{
setTimeout(()=>{
    switch (countFundo){
        case 0:
            Fundo.current.style.backgroundImage = `url(${Fundo4})`
            setCountFundo(1)
            break;
        case 1:
            Fundo.current.style.backgroundImage = `url(${Fundo3})`
            setCountFundo(2)
            break;
        case 2:
            Fundo.current.style.backgroundImage = `url(${Fundo2})`
            setCountFundo(0)
            break;
    }
},4000)
},[countFundo])

    return (
     <header ref={Fundo} style={{backgroundImage:`url(${Fundo2})`}}>
        <section className='firstSectionHeader'>

        <figure>
            <img src={Logo} alt="" />
        </figure>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
            </ul>
        </nav>
        </section>
     </header>
    )
  } 