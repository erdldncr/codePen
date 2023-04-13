import { Cell } from "../state";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";


interface CelListItemProps{
  cell:Cell
}

const CellListItem: React.FC<CelListItemProps>=({cell})=>{
  let child:JSX.Element
  if(cell.type==='code'){
    child=<CodeCell cell={cell}/>
  }else{
    child=<TextEditor cell={cell}/>
  }
  return <div>{child}</div>
}
export default CellListItem;