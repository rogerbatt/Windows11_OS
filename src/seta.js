import linkedin from './svg/linkedin.svg'
import whatsapp from './svg/whatsapp.svg'
import git from './svg/github.svg'

function Volume() {

  return (
    <div className='fixed right-36 bottom-16 bg-slate-800 bg-opacity-80 p-2 rounded-lg'>
        <div className='flex items-center space-x-4'>
            <button className='px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                <img src={linkedin} className='w-7' alt="Linkedin logo" />
            </button>
            <button className='px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                <img src={whatsapp} className='w-7' alt="Whatsapp logo" />
            </button>
            <button className='px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                <img src={git} className='w-7' alt="Whatsapp logo" />
            </button>
        </div>
    </div>
  );
}

export default Volume;