
import { useState } from "react";
import useHandleUpload from "../hook/useUpload";


export default function Panel() {

  const[uploadOutcome, setUploadOutcome]= useState("")
  const [uploadProgress, setUploadProgress] = useState(0);


  const {handleChange, handleSubmit}=useHandleUpload()

  return (
    
    <div className="card" style={{width: "50%", margin:"auto", marginTop:"100px"}} >
      <div className="card-body">
        <form onSubmit={(e)=>{handleSubmit(e, setUploadOutcome, setUploadProgress)}}>
          <h1>Upload A File</h1>
          <input type="file" className="form-control form-control-lg" id="formFileLg" onChange={(e)=>{handleChange(e)}}/>
          <button className="btn btn-dark" type="submit">Upload</button>
        </form>
        <div className="progress" role="progressbar">
          <div className="progress-bar" style={{width: uploadProgress+"%"}}>{uploadProgress}%</div>
        </div>
        <div><small>{uploadOutcome}</small></div>
      </div>
    </div>
  );

  }


  
          // <form>
          //   <label form="formFileLg" className="form-label">Upload A File</label>
          //   <input type="file" className="form-control form-control-lg" id="formFileLg" onChange={handleUpload}/>
          //   <button className="btn btn-dark" type="submit">Upload</button>
          // </form>
        
