import { useState } from 'react';
import './App.css';
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineNightlight } from 'react-icons/md'

function App() {

  const [themes, setThemes] = useState('container-dark') // State do background
  const [timeUS, setTimeUS] = useState('') // State para a mudança de horário(BR/US)
  const [AMPM24, setAMPM24] = useState(false) // state para verificar se o botão da mudança de horário está ativo ou não
  const [seconds, setSeconds] = useState(false) // state para verificar se o botão que oculta os segundos está ativo ou não
  const [time, setTime] = useState({ // state para captura os valores de horários
    hr: '', // hora
    mn: '', // minuto
    sc: '' // segundo
  })
  const [AMPM, setAMPM] = useState('') // stata para a mudança de AM e PM
  const [dayNow, setDayNow] = useState({ // state para captura de data
    week: '', // Semana
    day: '', // dia
    month: '', // mês
    year: '' // ano
  })
  const Week = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'] // array dos dias da semana
  const Months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] // array dos mêses do ano
  const DateNow = () =>{ // função onde será capturado od valores de horário e inserido nas states
    const timeNow = new Date()
    setTime({
      hr: timeNow.getHours(),
      mn: timeNow.getMinutes(),
      sc: timeNow.getSeconds()
    })
    time.hr === 12 ? setTimeUS(12) : setTimeUS(time.hr % 12) // transformando o horário BR em US
    time.hr >= 12 ? setAMPM('PM') : setAMPM('AM') // mudança da state de AM e PM
    
    setDayNow({
      week: Week[timeNow.getDay()],
      day: timeNow.getDate(),
      month: Months[timeNow.getMonth()],
      year: timeNow.getFullYear()
    })
  }

  const theme = () =>{ // função para a troca de background
    if(themes === 'container-dark'){
      setThemes('container-light')
    } 
    else if(themes === 'container-light'){
      setThemes('container-dark')
    }
  }

  setInterval(DateNow, 1000) // intervalo de 1 segundo para chamar a função

  return (
      <div className={themes}>
        <div className='dark-light'>
          <button // botão de troca de background
            title='Tema'
            onClick={theme}>
            <i>{themes === 'container-dark' ? < MdOutlineLightMode /> : <MdOutlineNightlight />}</i>
          </button>

          <div className='am-pm-24'> {/* Botão de mudança de horário */}
            <button onClick={()=>{AMPM24 === false ? setAMPM24(true) : setAMPM24(false)}} title='Formato de horário'>
              {AMPM24 === true ? '24h' : '12h'}
            </button>
        </div>

        <div className='seconds'> {/* Botão de mudança para ocultar os segundos */}
            <button onClick={()=>{seconds === false ? setSeconds(true) : setSeconds(false)}} title='Ocultar segundos'>
              Sec
            </button>
        </div>
        </div>
        
        <div className='dateNow'>
          <label>{dayNow.week}, {dayNow.day} de {dayNow.month} de {dayNow.year}</label> 
        </div>
        <div className='clock'>
          {AMPM24 ? 
          <div className={seconds === true ? "falseSecond" : "time"}>{timeUS} <span>{AMPM}</span> </div>
        :
          <div className={seconds === true ? "falseSecond" : "time"}>{time.hr < 10 ? '0' + time.hr : time.hr} <span>Hs</span></div>
          }
          <div className={seconds === true ? "falseSecond" : "time"}>{time.mn < 10 ? '0' + time.mn : time.mn} <span>Mn</span></div>
          {seconds === true ? ''
            :
            <div className="time">{time.sc < 10 ? '0' + time.sc : time.sc} <span>Sc</span> </div>
          }
        </div>
      </div>
  );
}

export default App;
