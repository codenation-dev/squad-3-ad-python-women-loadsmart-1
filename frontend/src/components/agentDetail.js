import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AgentDetail = ({ match }) => {
  const {
    params: { agentId },
  } = match;


  const [AgentDetail, setAgentDetail] = useState(null);
  const [AgentDetailError, setAgentDetailErrror] = useState(false);
  const [loading, setLoading] = useState(false);
  agentId = 1;

  useEffect(() => {
    const API_BASE_URL = `http://localhost:8000/api/agent`;
    const fetchAgentDetail = async () => {
      setLoading(true);
      setAgentDetailErrror(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${agentId}`);
        setAgentDetail(result.data);
      } catch (error) {
        setAgentDetailErrror(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchAgentDetail();
  }, [agentId]);

  return (
    <>
    <strong>{agentId}</strong>

      <br/>{AgentDetail.address} </>
  );

};

export default AgentDetail;



