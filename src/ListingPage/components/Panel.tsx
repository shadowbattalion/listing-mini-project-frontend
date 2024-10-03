//@ts-nocheck
import { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/list/?page=${page}&pageSize=5`); 
      const { list, totalPages } = response.data;
      console.log(response.data)
      setProducts(list);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
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

  const numberList = ()=>{
    console.log(totalPages)
      let numberList = []
      for(let i=0; i < totalPages; i++){
        numberList.push((<li key={i+1} className="page-item"><a className="page-link" onClick={()=>{current(i+1)}}>{i+1}</a></li>))
      }
      return numberList
    }
  
  

  return (
    <div style={{width: "50%", margin:"auto", marginTop:"100px"}}>
      <div>Page: {currentPage}</div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prev} >Previous</a>
          </li>
          {numberList()}
          <li className="page-item">
            <a className="page-link" onClick={next}>Next</a>
          </li>
        </ul>
      </nav>

      {products.map((product) => (
        <div key={product.id} className="card" style={{marginTop:"10px"}} >
          <div className="card-body">
            {product.name}
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default PaginationComponent;