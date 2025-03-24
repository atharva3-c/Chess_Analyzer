import './Files.css'
import { getCharacter } from '../../helper';
const Files=({files})=>{
    return <div className="files">
        {files.map(files=><span key={files}>{getCharacter(files) }</span>)}
    </div>
}
export default Files;

