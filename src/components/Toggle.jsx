import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import './Style/Toggle.css';

export default function Toggle(props){

    const [toggle, setToggle] = useState(false)

    const theme = () =>{ // função para a troca de background
        if(props.themes === 'container-dark'){
          props.setThemes('container-light')
        } 
        else if(props.themes === 'container-light'){
          props.setThemes('container-dark')
        }
      }

    return(
        <>
            {toggle ?
                <div className='container-toggle'>
                    <header>
                        <button
                            onClick={()=> setToggle(!toggle)}
                        > <i> <IoClose /> </i> </button>
                    </header>
                    
                    <main>
                        <button onClick={theme} >Mudar tema</button>
                        
                        <button
                            onClick={()=> props.AMPM24 === false ? props.setAMPM24(true) : props.setAMPM24(false)}
                        >Mudar formato de horário</button>

                        <button
                            onClick={()=> props.seconds === false ? props.setSeconds(true) : props.setSeconds(false)}
                        >Mostrar segundos</button>
                    </main>

                    <div className='favicon-toggle'>
                        <a target="blank" href="https://icons8.com/icon/82767/rel%C3%B3gio">Relógio</a> icon by <a target="blank" href="https://icons8.com">Icons8</a>
                    </div>
                </div>
                :
                <div className='container-menu'>
                    <button
                        onClick={()=> setToggle(!toggle)}
                    > <i> <IoMenu /> </i> </button>
                </div>
            }
        </>
    )
}