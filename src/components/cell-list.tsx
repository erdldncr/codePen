import { usedTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

const CellList: React.FC=()=>{
  const cells= usedTypedSelector(({cells:{order, data}})=>{
    return order.map((id)=>data[id])
  })
const renderedCells= cells.map((cell)=> <CellListItem key={cell.id} cell={cell}/> )
  return <div>{renderedCells}</div>
}
export default CellList;