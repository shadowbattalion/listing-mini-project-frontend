import { useState } from "react";
import axios from "axios";


export default function  useHandleUpload(){

    const [file, setFile] = useState<File|null>()

    const handleChange =  async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList:FileList|null = e.target.files
        if(fileList){
          setFile(fileList[0])
        }

    }
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, setUploadOutcome:React.Dispatch<React.SetStateAction<string>>, setUploadProgress:React.Dispatch<React.SetStateAction<number>>) => {
      e.preventDefault()
      if(file){
        const url = 'http://localhost:9000/api/list/';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
          onUploadProgress: (data:any) => {
            setUploadProgress(Math.round((data.loaded/data.total)*100))
          }
          
        };

        const response = await axios.post(url, formData, config)

        response.data?setUploadOutcome("file uploaded successfully"):setUploadOutcome("fail to upload")
        
      }else{
        setUploadOutcome("Please enter a file")
      }
 
    }

    return {handleChange, handleSubmit}

}