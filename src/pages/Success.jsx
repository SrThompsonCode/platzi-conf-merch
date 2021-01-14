import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = { state };
  const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion: </span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};
// AIzaSyBVIp70k0_GEGovOaV-vFDI5bJYE7qVtNQ

export default Success;
