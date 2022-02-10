import volume from './svg/som.png'
import mute from './svg/mute.png'
import {useState} from 'react'

function Volume() {
    const [iconVol, setIconVol] = useState(volume);

    function abrirAbaWindows(){
        iconVol === volume ? setIconVol(mute):setIconVol(volume)
    }

  return (
    <div className='fixed right-2 bottom-16 bg-slate-800 bg-opacity-80 p-5 rounded-lg'>
        <div className='flex items-center space-x-5'>
            <button onClick={abrirAbaWindows}>
                <img src={iconVol}  className='w-5' alt="Volume logo" />
            </button>
            <input type="range" name="range" class="w-56 h-2 bg-gray-400" />
        </div>
    </div>
  );
}

export default Volume;