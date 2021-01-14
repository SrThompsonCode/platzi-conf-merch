import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBVIp70k0_GEGovOaV-vFDI5bJYE7qVtNQ`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
