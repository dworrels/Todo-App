import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import trash from '../assets/trash.png'

const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 place-items-center cursor-pointer'>
            <img src={tick} alt="" className='w-7'/>
            <p className='text-slate-700 ml-4 text-[17px]'>
              {text}</p>
        </div>

      <img src={trash} alt="" className='w-4 cursor-pointer'/>
      
    </div>
  )
}

export default TodoItems