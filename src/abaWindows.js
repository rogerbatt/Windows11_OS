import git from './svg/github.svg'
import gmail from './svg/gmail.svg'
import linkedin from './svg/linkedin.svg'
import whatsapp from './svg/whatsapp.svg'
import desligar from './svg/desligar.png'
import avatar from './svg/avatar.jpg'

function Aba() {

  return (
    <div className='flex justify-center items-center'>
        <div className='fixed bottom-0 w-1/2 2xl:w-1/3 bg-gray-800 bg-opacity-95 border-2 border-gray-600 rounded-lg mb-14'>

            <div className="grid overflow-hidden grid-cols-1 grid-rows-2 px-16">

                <div className="box row-start-1 pt-6">
                    <svg class="absolute mt-3 ml-2 text-gray-400 h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                    <input className="placeholder:text-white placeholder:opacity-50 text-white bg-gray-900 w-full border-b-4 border-cyan-500 rounded-md py-2 pl-9 focus:outline-none" placeholder="Digite aqui para pesquisar" type="text" name="search"/>
                </div>

                <div className="box row-start-2 h-1/2 text-white">
                    <h1 className='font-semibold pb-3'>Fixado</h1>
                    <div className='flex space-x-10'>
                        <button className='flex flex-col items-center px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                            <a href="https://github.com/rogerbatt" target="_blank" rel="noreferrer">
                                <img src={git} className='w-10 p-1' alt="Github logo" />
                                <h1 className='text-sm'>Github</h1>
                            </a>
                        </button>
                        <button className='flex flex-col items-center px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20' >
                            <a href="mailto:rogeriobf.dev@gmail.com" target="_blank" rel="noreferrer">
                                <img src={gmail} className='w-10 p-1' alt="Gmail logo" />
                                <h1 className='text-sm'>Gmail</h1>
                            </a>
                        </button>
                        <button className='flex flex-col items-center px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                            <a href="https://www.linkedin.com/in/rogerio-battistoni-filho-87432a133/" target="_blank" rel="noreferrer">
                                <img src={linkedin} className='w-10 p-1' alt="LinkedIn logo" />
                                <h1 className='text-sm'>LinkedIn</h1>
                            </a>
                        </button>
                        <button className='flex flex-col items-center px-2 py-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                            <a href="https://api.whatsapp.com/send?phone=5513991827771" target="_blank" rel="noreferrer">
                                <img src={whatsapp} className='w-10 p-1' alt="Whatsapp logo" />
                                <h1 className='text-sm'>WhatsApp</h1>
                            </a>
                        </button>
                    </div>
                </div>

                <div className="box row-start-3 h-1/2 text-white pt-12 pb-16">
                    <h1 className='font-semibold pb-3'>Recomendado</h1>
                    <div className='flex space-x-10'>
                        <div className='space-y-8'>
                            <button className='flex pl-2 py-2 pr-16 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                                <a href="https://github.com/rogerbatt" target="_blank" rel="noreferrer" className='flex'>
                                    <img src={git} className='w-10' alt="Github logo" />
                                    <div className='flex flex-col items-start pl-2'>
                                        <h1 className='text-sm'>Github</h1>
                                        <h1 className='text-xs'>Veja meu portfólio</h1>
                                    </div>
                                </a>
                            </button>
                            
                            <button className='flex pl-2 py-2 pr-16 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                                <a href="mailto:rogeriobf.dev@gmail.com" target="_blank" rel="noreferrer" className='flex'>
                                    <img src={gmail} className='w-10' alt="Gmail logo" />
                                    <div className='flex flex-col items-start pl-2 text-left'>
                                        <h1 className='text-sm'>Gmail</h1>
                                        <h1 className='text-xs w-40'>Entre em contato por email</h1>
                                    </div>
                                </a>
                            </button>
                        </div>

                        <div className='space-y-8'>
                            <button className='flex pl-2 py-2 pr-16 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                                <a href="https://www.linkedin.com/in/rogerio-battistoni-filho-87432a133/" target="_blank" rel="noreferrer" className='flex'>
                                    <img src={linkedin} className='w-10' alt="LinkedIn logo" />
                                    <div className='flex flex-col items-start pl-2 text-left'>
                                        <h1 className='text-sm'>LinkedIn</h1>
                                        <h1 className='text-xs w-40'>Veja meu perfil no LinkedIn</h1>
                                    </div>
                                </a>
                            </button>
                            <button className='pl-2 py-2 pr-16 rounded-md hover:bg-gray-400 hover:bg-opacity-20'>
                                <a href="https://api.whatsapp.com/send?phone=5513991827771" target="_blank" rel="noreferrer" className='flex'>
                                    <img src={whatsapp} className='w-10' alt="WhatsApp logo" />
                                    <div className='flex flex-col items-start pl-2 text-left'>
                                        <h1 className='text-sm'>WhatsApp</h1>
                                        <h1 className='text-xs w-36'>Entre em contato</h1>
                                    </div>
                                </a>
                            </button>
                        </div>
                    </div>

                </div>

                <div class="box row-start-4 border-t-2 border-gray-600 flex justify-between mt-5">
                    <button className='flex space-x-2 items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-md px-4 my-5 py-1'>
                        <img src={avatar} className='w-8 rounded-full' alt="Avatar Perfil" />
                        <h1 className='text-white text-sm'>Rogerio Battistoni Filho</h1>
                    </button>
                    <button>
                        <img src={desligar} onClick={()=> window.close()} className='w-9 p-2 rounded-md hover:bg-gray-400 hover:bg-opacity-20' alt="Github logo" />
                    </button>
                </div>
            </div>                
        </div>
    </div>
  );
}

export default Aba;
