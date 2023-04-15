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
    <AddCell nextCellId={cell.id}/>
    <CellListItem cell={cell}/>
  </Fragment>
) )
  return <div>{renderedCells} 
  <div className={cells.length===0?'force-visible':''}>
<AddCell nextCellId={null}/> 

  </div>
  </div>
}
export default CellList;