//@ts-nocheck
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function usePaginate (setList) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
  
    const fetchList = async (page) => {
      try {
        const response = await axios.get(`http://localhost:9000/api/list/?page=${page}&pageSize=25`); 
        const { list, totalPages } = response.data;
        console.log(response.data)
        setList(list);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchList(currentPage);
    }, [currentPage]);
  
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
  
   return {prev,current,next, currentPage, totalPages}

  

  };