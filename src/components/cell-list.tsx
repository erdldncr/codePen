import './cell-list.css'
import { Fragment } from "react";
import { usedTypedSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";

const CellList: React.FC=()=>{
  const cells= usedTypedSelector(({cells:{order, data}})=>{
    return order.map((id)=>data[id])
  })
const renderedCells= cells.map((cell)=> (

  <Fragment key={cell.id} >
       <CellListItem cell={cell}/>
    <AddCell previousCellId={cell.id}/>
  </Fragment>
) )
  return <div className='cell-list'>
   
  <div className={cells.length===0?'force-visible':''}>
<AddCell previousCellId={null}/> 
  </div>
   {renderedCells} 
  </div>
}
export default CellList;