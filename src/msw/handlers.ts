
import { http, HttpResponse } from "msw";
import { ListType } from "../ListingPage/Listing.types";

const resJsonGenerator = (csvLines: number, list:ListType, totalPages:number, pageSize:string ) =>{
    if (pageSize){
        for(let i=0; i<csvLines;i++){

            list.push({
                id:i,
                name:"",
                email:"",
                body:""
            })

        }

        totalPages= Math.floor(csvLines/parseInt(pageSize))


        return { list, totalPages }

    }

    
} 



export const handlers = [
    http.post("http://localhost:9000/api/list/", async ({request}) => {
        const url = new URL(request.url)
        console.log(url.toString())

        HttpResponse.json({ result:"received" })
        
    }),
    http.options("http://localhost:9000/api/list/", async () => {
        

        
        
    }),
    http.get("http://localhost:9000/api/list/get", async ({request}) => {
        const url = new URL(request.url)
        
        const pageSize =  url.searchParams.get('pageSize')

        let list:ListType=[]
        let totalPages=0
        
        let resJson
        if (pageSize){
            resJson = resJsonGenerator(26, list, totalPages, pageSize)
        }


        HttpResponse.json(resJson)
    }),
    http.options("http://localhost:9000/api/list/get",  () => {
        

        
        
    }),
];