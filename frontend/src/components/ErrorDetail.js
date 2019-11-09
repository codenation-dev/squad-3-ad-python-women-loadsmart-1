import React from 'react';

const ErrorDetail = ({ match }) => {
  const {
    params: { errorId },
  } = match;

  return (
    <div>
      Erro details page: <strong>{errorId}</strong>
    </div>
  );
};

export default ErrorDetail;



