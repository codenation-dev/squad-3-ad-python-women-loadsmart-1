import React from 'react';
import AgentDetail from '../components/agentDetail'

const ErrorDetail = ({ errorDetail }) => {
  const createDescMarkup = description => {
    return { __html: description };
  };


  return (
    <section className="container">
      <h1>            {errorDetail.log} </h1>
        <div class="row">
            <div class="col py-2 px-lg-7"> <br/>

            <h3> Title: {errorDetail.title}</h3>
            
           <br/> 
           <br/> Description 
           <br/> <br/>
           {errorDetail.description}
           <br/>
           
           </div>
             <div class="col-3 py-3 px-lg-3 border bg-light">
               <br/>
               <button type="button" class="btn btn-danger">{errorDetail.level}
               </button>

               <br/> <br/>

               <button type="button" class="btn btn-info">{errorDetail.sources}

               </button>
               <br/>
               <br/> <b>Frequency:</b> <br/>  
               {errorDetail.error_counting}
                  <br/>
               <b>Colected by: </b> <br/>
                        {errorDetail.user}
                   <br/>
                  <br/>
                  Id : 
                  {errorDetail.id}
                  <br/>
                  Agent Address: {errorDetail.agent}
                  <br/>


                 <br/> Created :      
    
                   {errorDetail.created}


                     
             
             </div>
         </div>
      <div>
        <div>
  
        </div>
      </div>
      <br/>
    </section>
  );
  
};


export default ErrorDetail;