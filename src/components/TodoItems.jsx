import PropTypes from 'prop-types';
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import trash from '../assets/trash.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 place-items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
              {text}</p>
        </div>

      <img onClick={()=>{deleteTodo(id)}} src={trash} alt="" className='w-4 cursor-pointer'/>
      
    </div>
  )
}

TodoItems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};  

  export default TodoItems;

  
  
 