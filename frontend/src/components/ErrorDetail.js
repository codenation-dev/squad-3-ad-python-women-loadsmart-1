import React from 'react';
import AgentDetail from '../components/agentDetail'

const ErrorDetail = ({ errorDetail }) => {
  const createDescMarkup = description => {
    return { __html: description };
  };


  return (
    <section className="container">
      <br/> <br/>
      <a href="/" class="alert-link"><button type="button" class="btn btn-outline-dark"> Home </button>
      </a> 
      <br/> <br/>
      <h1>            {errorDetail.log} </h1>
        <div class="row">
            <div class="col py-2 px-lg-7"> <br/>
            <h3> Title: {errorDetail.title}</h3>
            <br/> <br/> Description  <br/> 
            <br/> {errorDetail.description}
           <br/>
           
           </div>
             <div class="col-4 py-3 px-lg-3 border bg-light">
               <br/>
               <button type="button" class="btn btn-danger">{errorDetail.level}
               </button>

               <br/> <br/>

               <button type="button" class="btn btn-info">{errorDetail.sources}

               </button>
               <br/>
               <br/>
                  Id : 
                  {errorDetail.id}
               <br/> <b>Frequency:</b> <br/>  
               {errorDetail.error_counting}
                  <br/>
               <b>Colected by: </b> <br/>
                        {errorDetail.user}
                   <br/>
            
                  <br/>
                  <b>Agent Details: </b>
                  <br/>
                  Agent id: {errorDetail.agent}
                  <AgentDetail search = {errorDetail.agent}/> 
                  <br/>
                 <br/> Created :      
                       {errorDetail.created}
                  <br/>
                 <br/> Is Active :  {errorDetail.is_active}
                <br/>
                  <a href="/" class="alert-link"><button type="button" class="btn btn-outline-dark"> Deactivate </button>
                  </a> 

             
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