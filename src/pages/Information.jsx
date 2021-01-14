import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
import { useForm } from 'react-hook-form';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useHistory();
  // const handleSubmit = () => {
  //   const formData = new FormData(form.current);
  //   const buyer = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     address: formData.get('address'),
  //     depto: formData.get('depto'),
  //     city: formData.get('city'),
  //     country: formData.get('country'),
  //     state: formData.get('state'),
  //     cp: formData.get('cp'),
  //     phone: formData.get('phone'),
  //   };
  //   addToBuyer(buyer);
  // };

  //IMPLEMENTANDO USE FORM HOOKS
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const buyer = {
      name: data.name,
      email: data.email,
      address: data.address,
      depto: data.depto,
      city: data.city,
      country: data.country,
      state: data.state,
      cp: data.cp,
      phone: data.phone,
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  const confInput = register({ maxLength: 80 });

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto: </h2>
        </div>
        <div className="Information-form">
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <form ref={form}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              ref={confInput}
            />
            <input
              type="email"
              placeholder="Correo"
              name="email"
              ref={confInput}
            />
            <input
              type="tel"
              placeholder="Telefono"
              name="phone"
              ref={confInput}
            />
            <input
              type="text"
              placeholder="Direccion"
              name="address"
              ref={confInput}
            />

            <input
              type="text"
              placeholder="Departamento"
              name="depto"
              ref={confInput}
            />
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              ref={confInput}
            />
            <input
              type="text"
              placeholder="Pais"
              name="country"
              ref={confInput}
            />
            <input
              type="text"
              placeholder="Localidad"
              name="state"
              ref={confInput}
            />
            <input
              type="text"
              placeholder="Codigo Postal"
              name="cp"
              ref={confInput}
            />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">Regresar</Link>

          <Link to="/checkout/payment">
            <div className="Information-next">
              <button type="button" onClick={handleSubmit(onSubmit)}>
                Pagar
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido: </h3>

        {cart.map((item) => {
          return (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>{`$ ${item.price}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
