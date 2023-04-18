import './code-cell.css'
import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import {Cell} from '../state'
import { useActions } from '../hooks/used-actions';
import { usedTypedSelector } from '../hooks/use-typed-selector';
interface CodeCellProps{
  cell:Cell;
}
const CodeCell: React.FC<CodeCellProps> = ({cell}) => {

const {updateCell, createBundle} = useActions()
const bundle =usedTypedSelector((state)=>state.bundles[cell.id])

  useEffect(() => {
    if(!bundle){
      createBundle(cell.id,cell.content)
      return
    }
    const timer = setTimeout(async () => {
createBundle(cell.id,cell.content)
     
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content,cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div style={{ height:'cal(100%-10px)', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id,value)}
          />
        </Resizable>
        {
          !bundle || bundle.loading ?<div className="progress-wrapper">
<div className="progress-cover">
            <progress className="progress is-small is-primary" max="100">
              Loading
            </progress>
          </div>

          </div>:<Preview code={bundle.code} err={bundle.err} />
        }
    
      </div>
    </Resizable>
  );
};

export default CodeCell;
