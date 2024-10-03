import { useState, useEffect } from 'react';
import axios from 'axios';
import { AxiosGetType, ListType } from '../Listing.types';


export default function usePaginateAndSearch (setList:React.Dispatch<React.SetStateAction<ListType>>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchKey, setSearchKey] = useState("")
  
    const fetchList = async (page:number) => {
    try {
        const url=`http://localhost:9000/api/list/get?searchKey=${searchKey}&page=${page}&pageSize=25`
        const response = await axios.get<AxiosGetType>(url); 
        const { list, totalPages } = response.data;
        setList(list);
        setTotalPages(totalPages);
    } catch (error) {
        console.log(error);
    }

    }

    useEffect(() => {
        fetchList(currentPage);
      }, [currentPage, searchKey]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.target.value)
        setCurrentPage(1);
    }

    const prev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage- 1);
      }
    };
  
    const next = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const current = (pageNumber:number) => {
      
        setCurrentPage(pageNumber);
  
    };
  
   return {prev,current,next, currentPage, totalPages, handleSearch}

  

  };