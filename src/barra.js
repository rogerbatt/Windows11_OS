import wind from './svg/wind.svg'
import git from './svg/github.svg'
import gmail from './svg/gmail.svg'
import linkedin from './svg/linkedin.svg'
import whatsapp from './svg/whatsapp.svg'
import volume from './svg/som.png'
import wifi from './svg/wi-fi.png'
import arrow from './svg/arrow.png'
import {useState, useEffect} from 'react'
import Aba from './abaWindows'
import VolumPage from './volume'
import Rede from './rede'
import Seta from './seta'



function Barra() {

  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [aba, setAba] = useState('invisible');
  const [volu, setVolume] = useState('invisible');
  const [rede, setRede] = useState('invisible');
  const [abaSeta, setAbaSeta] = useState('invisible');

  function abrirAbaWindows(){
    aba === '' ? setAba('invisible'):setAba('')
  }

  function abrirAbaVolume(){
    volu === '' ? setVolume('invisible'):setVolume('')
  }

  function abrirRede(){
    rede === '' ? setRede('invisible'):setRede('')
  }

  function abrirSeta(){
    abaSeta === '' ? setAbaSeta('invisible'):setAbaSeta('')
  }

  useEffect(() => {
    const current = new Date();
    setData(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`)
    setTime(`${current.getHours()}:${current.getMinutes()}`)
    setDay(`${current.getHours()}` >= 12 ? 'PM' : 'AM')
  }, []);


  return (
    <div>
      <div className={aba}><Aba/></div>
      <div className={volu}><VolumPage/></div>
      <div className={rede}><Rede/></div>
      <div className={abaSeta}><Seta/></div>
      <div className="bg-gradient-to-r opacity-95 from-black via-blue-900 to-black w-full py-2 fixed bottom-0">
          <div className='flex justify-center space-x-1'>
            <button>
              <img src={wind} onClick={abrirAbaWindows} className='w-10 p-1 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Windows11 logo" />
            </button>
            <button>
              <a href="https://github.com/rogerbatt" target="_blank" rel="noreferrer">
                <img src={git} className='w-10 p-1 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Github logo" />
              </a>
            </button>
            <button>
              <a href="mailto:rogeriobf.dev@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} className='w-10 p-1 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Gmail logo" />
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/rogerio-battistoni-filho-87432a133/" target="_blank" rel="noreferrer">
                <img src={linkedin} className='w-10 p-1 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="LinkedIn logo" />
              </a>
            </button>
            <button>
              <a href="https://api.whatsapp.com/send?phone=5513991827771" target="_blank" rel="noreferrer">
                <img src={whatsapp} className='w-10 p-1 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Whatsapp logo" />
              </a>
            </button>

            <div className='fixed flex right-0 space-x-5 pr-5'>
              <button>
                <img src={arrow} onClick={abrirSeta} className='w-7 p-2 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Seta logo" />
              </button>
              <button>
                <img src={wifi} onClick={abrirRede} className='w-8 p-2 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Wi-Fi logo" />
              </button>
              <button>
                <img src={volume} onClick={abrirAbaVolume} className='w-8 p-2 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Volume logo" />
              </button>
              <div className='text-white text-sm px-2 duration-100 rounded-md hover:bg-gray-400 hover:bg-opacity-20 cursor-default'>
                <h1>{time} {day}</h1>
                <h2>{data}</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Barra;
