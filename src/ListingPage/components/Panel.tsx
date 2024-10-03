//@ts-nocheck
import { useState } from 'react';
import usePaginate from '../hook';


export default function Panel () {
  
  const [list, setList] = useState([]);
  const {prev,current,next, currentPage, totalPages, handleSearch}= usePaginate(setList)
  

  const numberList = ()=>{
      let numberList = []
      for(let i=0; i < totalPages; i++){
        numberList.push((<li key={i+1} className="page-item"><div className="page-link" onClick={()=>{current(i+1)}}>{i+1}</div></li>))
      }
      return numberList
    }
  
  
  console.log(list)
  return (
    <div style={{width: "50%", margin:"auto", marginTop:"100px"}}>
      <div>Page: {currentPage}</div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <div className="page-link" onClick={prev} >Previous</div>
          </li>
          {numberList()}
          <li className="page-item">
            <div className="page-link" onClick={next}>Next</div>
          </li>
        </ul>
      </nav>
      <input type="input" placeholder="Search email" className="form-control form-control-lg" id="formFileLg" onChange={handleSearch}/>
      {list.map((item) => (
        <div key={item.id} className="card" style={{marginTop:"10px"}}>
        <div className="card-body">
          <h5 className="card-title">Name: {item.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Email: {item.email}</h6>
          <p className="card-text">{item.body}</p>
        </div>
      </div>
      ))}
      
    </div>
  );
};

