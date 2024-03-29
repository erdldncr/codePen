import { useActions } from '../hooks/used-actions';
import './add-cell.css'

interface AddCellProps{
  previousCellId: string | null;
}

const AddCell:React.FC<AddCellProps>=({previousCellId})=>{
  const {insertcellAfter}= useActions()
  return <div className='add-cell'>
    <div className="add-buttons">
      <button className='button is-rounded is-primary is-small' onClick={()=>insertcellAfter(previousCellId,'code')}>
        <span className="icon is-small">
<i className="fas fa-plus"/>

        </span>
        <span>Code</span></button>
    <button className='button is-rounded is-primary is-small' onClick={()=>insertcellAfter(previousCellId,'text')}>
       <span className="icon is-small">
<i className="fas fa-plus"/>

        </span>
     <span> Text</span>
     </button>
    </div>
    <div className="divider">
      
    </div>
  </div>
}

export default AddCell