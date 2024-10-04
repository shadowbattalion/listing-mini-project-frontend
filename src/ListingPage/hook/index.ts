import { useState, useEffect } from 'react';
import axios from 'axios';
import { AxiosGetType, ListType } from '../Listing.types';


export default function usePaginateAndSearch (setList:React.Dispatch<React.SetStateAction<ListType>>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchKey, setSearchKey] = useState("")
  
    const fetchList = async (page:number) => {
    try {
        // fetches data from the backend which will respond the list of entries and the total number of pages 
        // after dividing the total number of entries with page size, which is the amount of entries that will appear per page.
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
        // Will fetch the list from backend when usePaginateAndSearch hook is called. Will be called if there is a change during page change or search key word changes
        fetchList(currentPage);
      }, [currentPage, searchKey]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // when the state change for search key, the component will reload and do a fetch via useEffect
        setSearchKey(e.target.value)
        // will reset the current page because during email search, the number of possible matches will reduce and hence the pagination number.
        // There for it is logical to reset the current page to 1
        setCurrentPage(1);
    }

    const prev = () => {
      // as long as the current page is not the first page, this handle will bring user to the previous page
      if (currentPage > 1) {
        setCurrentPage(currentPage- 1);
      }
    };
  
    const next = () => {
      // as long as the current page is 1 page before the total number of pages, this handle will bring user to the next page
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const current = (pageNumber:number) => {
        // this handle to be sent to Panel where it will reside in each pagination button so that users can
        // click on a certain page number and go to it.
        setCurrentPage(pageNumber);
  
    };
  
   return {prev,current,next, currentPage, totalPages, handleSearch}

  

  };