// Payments.js
import React, { useState } from "react";
import "./Payments.css";
import UserInfoForm from "../../services/payments/UserInfoForm/UserInfoForm.jsx";
import PaymentForm from "../../services/payments/PaymentForm/PaymentForm.jsx";
import OrderList from "../../services/payments/OrderList/OrderList.jsx";

export default function Payments() {
  const [phase, setPhase] = useState(1); // 1: Información del cliente, 2: Método de pago, 3: Resultado y edición
  const [userInfo, setUserInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleUserInfoSubmit = (data) => {
    setUserInfo(data);
    setPhase(2); // Cambiar a la fase de Método de Pago
  };

  const handlePaymentSubmit = (data) => {
    setPaymentInfo(data);
    const newOrder = { userInfo: userInfo, paymentInfo: data };
    setOrders([...orders, newOrder]);
    setPhase(3); // Cambiar a la fase de Resultado y edición
  };

  const handleEditUserInfo = () => {
    setPhase(1); // Cambiar a la fase de Información del Cliente
  };

  const handleEditPaymentInfo = () => {
    setPhase(2); // Cambiar a la fase de Método de Pago
  };

  return (
    <div className="container">
      {phase === 1 && <UserInfoForm onSubmit={handleUserInfoSubmit} />}
      {phase === 2 && <PaymentForm onSubmit={handlePaymentSubmit} />}
      {phase === 3 && (
        <div className="order-list-container">
          <OrderList orders={orders} />
          <div className="button-container">
            <button className="button" onClick={handleEditUserInfo}>
              Editar Información del Cliente
            </button>
            <button className="button" onClick={handleEditPaymentInfo}>
              Editar Método de Pago
            </button>
            <button className="button" onClick={handleEditPaymentInfo}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
