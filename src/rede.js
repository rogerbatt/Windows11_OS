import rede from './svg/wi-fi.png'

function Rede() {
  return (
    <div className='fixed right-2 bottom-16 bg-slate-800 bg-opacity-80 xl:w-1/4 xl:h-2/4 2xl:w-1/6 rounded-lg text-white'>
        <div className='p-5 pb-16 bg-blue-600 mt-2'>
            <div className='flex items-center space-x-5'>
                <img src={rede}  className='w-5 mt-1' alt="Rede botão" />
                <h1>WI-FI ME CONTRATA</h1>
            </div>
            <div className='ml-10 mt-1'>
                <h1 className='text-gray-900'>Conectado, seguro</h1>
                <h1 className='text-cyan-500 underline underline-offset-3'>Propriedades</h1>
            </div>
            <button className='absolute right-5 mt-4 bg-blue-500 px-4 py-1 active:bg-blue-700'>Desconectar</button>
        </div>
    </div>
  );
}

export default Rede;