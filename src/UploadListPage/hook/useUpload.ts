//@ts-nocheck
import { useState } from "react";
import axios from "axios";



export default function  useHandleUpload(){

    const [file, setFile] = useState()

    const handleChange =  async (event) => {

        setFile(event.target.files[0])

    }
    
    const handleSubmit = async(event, setUploadOutcome, setUploadProgress) => {
      try
      {
      event.preventDefault()
      const url = 'http://localhost:9000/api/list/upload';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
        onUploadProgress: (data) => {
          setUploadProgress(Math.round((data.loaded/data.total)*100))
        }
      
      };

      const response = await axios.post(url, formData, config)
      
    
      

      response.data?setUploadOutcome("file uploaded successfully"):setUploadOutcome("fail to upload")

      } catch (e){
        console.log(e)
        setUploadOutcome("Please enter a file")
        
      }
    }

    return {handleChange, handleSubmit}

}