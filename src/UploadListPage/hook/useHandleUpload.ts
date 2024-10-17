import { useState } from "react";
import axios from "axios";


export default function  useHandleUpload(){

    const [file, setFile] = useState<File|null>()

    //handle change for the file input element
    const handleChange =  async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList:FileList|null = e.target.files
        if(fileList){
          setFile(fileList[0])
        }

    }
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, setUploadOutcome:React.Dispatch<React.SetStateAction<string>>, setUploadProgress:React.Dispatch<React.SetStateAction<number>>) => {
      e.preventDefault()
      if(file){
        //takes the file and add to the formdata to format it for http request.
        // multipart/form-data is for big data like files
        // onUploadProgress is where the current data loaded is calculated and is passed to the frontend progress bar 
        const url = 'http://localhost:9000/api/list/';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
          // headers: {
          //   'content-type': 'multipart/form-data',
          // },
          onUploadProgress: (data:any) => {
            setUploadProgress(Math.round((data.loaded/data.total)*100))
          }
          
        };

        const response = await axios.post(url, formData, config)
        // Note: Axios throwing Network Error despite MSW running and hitting the handlers.
        
        // (the for testing) Use the following and comment out the above statement. 
        // const response = {data:{"test":test}} //Whole flow works when the axios is bypassed

        // depending on the response, this label will show up on the frontend to indicate to users if the file upload was successful
        response.data?setUploadOutcome("File uploaded successfully"):setUploadOutcome("Fail to upload")
        
      }else{
        setUploadOutcome("Please enter a file")
      }
 
    }

    return {handleChange, handleSubmit}

}