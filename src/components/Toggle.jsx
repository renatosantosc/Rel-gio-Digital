import './Style/Toggle.css'

export default function Toggle(){
    return(
        <>
            <div className='container-toggle'>
                
                <header>
                    <button>Ícone</button>
                </header>
                
                <main>
                    <button>Mudar tema</button>
                    <button>Mudar formato de horário</button>
                    <button>Mostrar segundos</button>
                </main>

                <div className='favicon-toggle'>
                    <a target="blank" href="https://icons8.com/icon/82767/rel%C3%B3gio">Relógio</a> icon by <a target="blank" href="https://icons8.com">Icons8</a>
                </div>

            </div>
        </>
    )
}