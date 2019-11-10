import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ErrorDetail from'../components/ErrorDetail'

const ErrorDetailPage = ({ match }) => {
  const {
    params: { errorId },
  } = match;


  const [errorDetail, setErrorDetail] = useState(null);
  const [errorDetailError, setErrorDetailErrror] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `http://localhost:8000/api/central`;
    const fetchErrorDetail = async () => {
      setLoading(true);
      setErrorDetailErrror(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${errorId}`);
        setErrorDetail(result.data);
      } catch (error) {
        setErrorDetailErrror(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchErrorDetail();
  }, [errorId]);

  return (
    <>
  

      {loading && (
        <div style={{ color: `green` }}>
          loading error detail for error ID: <strong>{errorId}</strong>
        </div>
      )}
      {errorDetailError && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
       {errorDetail && <ErrorDetail errorDetail={errorDetail} />}
       
    </>
  );

};

export default ErrorDetailPage;



