import React from 'react';

import { Link } from 'react-router-dom';
const ErrorDetail = ({ errorDetail }) => {
  const createDescMarkup = description => {
    return { __html: description };
  };


  return (
    <section>
      <div>
        <div>
        {errorDetail.id}
           <br/>
           {errorDetail.title}
           <br/>
           {errorDetail.user}
           <br/>
           {errorDetail.sources}
           <br/>
           {errorDetail.log}
           <br/>
           {errorDetail.level}
           <br/>
           {errorDetail.description}
           <br/>
           {errorDetail.is_active}
           <br/>
           {errorDetail.created}
      
           <br/>
           {errorDetail.error_counting}
           <br/>

            


          
        </div>
      </div>
    </section>
  );
  
};


export default ErrorDetail;