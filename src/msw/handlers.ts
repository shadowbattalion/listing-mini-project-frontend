
import { http, HttpResponse } from "msw";



export const handlers = [
    http.post("http://localhost:9000/api/list/", async ({request}) => {
        const url = new URL(request.url)
        console.log(url)

        HttpResponse.json({ result:"received" })
        
    }),
    http.options("http://localhost:9000/api/list/", async () => {
        

        
        
    }),
    http.get("http://localhost:9000/api/list/get", async ({request}) => {
        const url = new URL(request.url)
        
        const searchKey = url.searchParams.get('searchKey')
        const page = url.searchParams.get('page')
        const pageSize = url.searchParams.get('pageSize')

        console.log(searchKey)
        console.log(page)
        console.log(pageSize)


        HttpResponse.json({ list: [{
            id:1,
            name:"string",
            email:"string",
            body:""
        }], totalPages:1 })
    }),
];