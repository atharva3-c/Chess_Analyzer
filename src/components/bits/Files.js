import './Files.css'
const Files=({files})=>{
    return <div className="files">
        {files.map(files=><span key={files}>{files}</span>)}
    </div>
}
export default Files;

