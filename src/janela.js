import Draggable from 'react-draggable';
import git from './svg/github.svg'
import gmail from './svg/gmail.svg'
import linkedin from './svg/linkedin.svg'
import whatsapp from './svg/whatsapp.svg'
import lixeira from './svg/lixeira.png'


function Janela() {
  return (
    <div className='pt-5 space-y-5'>
      <Draggable>
        <div className='flex flex-col items-center w-16 px-2 text-white text-sm hover:bg-gray-800 hover:bg-opacity-80 hover:rounded-md ml-5'>
          <img src={lixeira} className='pointer-events-none' alt="Gmail logo" />
          <h1>Lixeira</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className='flex flex-col items-center w-16 px-2 text-white text-sm hover:bg-gray-800 hover:bg-opacity-80 hover:rounded-md ml-5'>
          <img src={git} className='pointer-events-none' alt="Gmail logo" />
          <h1>Github</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className='flex flex-col items-center w-16 px-2 text-white text-sm hover:bg-gray-800 hover:bg-opacity-80 hover:rounded-md ml-5'>
        <img src={gmail} className='pointer-events-none' alt="Gmail logo" />
        <h1>Gmail</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className='flex flex-col items-center w-16 px-2 text-white text-sm hover:bg-gray-800 hover:bg-opacity-80 hover:rounded-md ml-5'>
        <img src={linkedin} className='pointer-events-none' alt="Gmail logo" />
        <h1>LinkedIn</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className='flex flex-col items-center w-20 px-4 text-white text-sm hover:bg-gray-800 hover:bg-opacity-80 hover:rounded-md ml-3'>
        <img src={whatsapp} className='pointer-events-none' alt="Gmail logo" />
        <h1>WhatsApp</h1>
        </div>
      </Draggable>
    </div>
  );
}

export default Janela;


          
          
