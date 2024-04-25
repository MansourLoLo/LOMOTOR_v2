import React, { useEffect, useState } from "react";
import CarService from "../../services/firebase/cars-service.js";

export default function CarsList() {
  const [cars, setCars] = useState([]);

  const getAllCars = () =>{
    CarService.getAllCars().then((items) => {
      let auxCars = []

      items.forEach((i) => {
        const key = i.key
        const data = i.val()

        const auxCar = {
          key: key,
          brand: data.brand,
          model: data.mode
        }

        auxCars.push(auxCar)
      })
      setCars([...auxCars])
    })

    console.log("Datos obtenidos")
  }

  useEffect(()=>{
    getAllCars()
  }, [])

  return (
    <>
      {cars.map((c) => (
        <p key={c.key}>
          {c.brand} {c.model}
        </p>
      ))}
    </>
  );
}
