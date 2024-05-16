// OrderList.js
import React from "react";

export default function OrderList({ orders }) {
  return (
    <div className="order-list">
      <h2>Órdenes Realizadas</h2>
      {orders.map((order, index) => (
        <div key={index} className="order">
          <h3>Orden {index + 1}</h3>
          <p>
            <strong>Nombre:</strong> {order.userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {order.userInfo.email}
          </p>
          <p>
            <strong>Número de Tarjeta:</strong> {order.paymentInfo.cardNumber}
          </p>
          <p>
            <strong>Fecha de Vencimiento:</strong> {order.paymentInfo.expiryDate}
          </p>
          <p>
            <strong>CVV:</strong> {order.paymentInfo.cvv}
          </p>
        </div>
      ))}
    </div>
  );
}
