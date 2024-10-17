
import { http, HttpResponse } from "msw";
import { ListType } from "../ListingPage/Listing.types";

const resJsonGenerator = (csvLines: number, list:ListType, totalPages:number, pageSize:string, page:string, searchKey:string | null ) =>{

        for(let i=0; i<parseInt(pageSize);i++){

            list.push({
                id:i,
                name:"",
                email:`Page number ${page}, Card number ${i}`,
                body:""
            })

        }

        if(searchKey!=null){
            list = list.filter((item)=>item.email.includes(`Page number ${page},`))
        }
        

        totalPages= Math.floor(csvLines/parseInt(pageSize))


        return { list, totalPages }


    
} 



export const handlers = [
    http.post("http://localhost:9000/api/list/", async ({request}) => {
        const url = new URL(request.url)
        console.log(url.toString())

        return HttpResponse.json({ result:"received" })
        
    }),
    http.options("http://localhost:9000/api/list/", async () => {
        

        
        
    }),
    http.get("http://localhost:9000/api/list/get", async ({request}) => {
        const url = new URL(request.url)
        
        const pageSize =  url.searchParams.get('pageSize')
        const page =  url.searchParams.get('page')
        const searchKey =  url.searchParams.get('searchKey')

        let list:ListType=[]
        let totalPages=0
        
        let resJson
        if (pageSize && page){
            resJson = resJsonGenerator(500, list, totalPages, pageSize, page, searchKey)
        }


        return HttpResponse.json(resJson)
    }),
    http.options("http://localhost:9000/api/list/get",  () => {
        

        
        
    }),
];