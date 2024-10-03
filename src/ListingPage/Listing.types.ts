export type ItemType = {
    id:number,
    name:string,
    email:string,
    body:string
}

export type ListType =  ItemType[]

export type AxiosGetType = {
    list:ListType,
    totalPages:number
}