import React, { useEffect, useState } from "react";
import CarService from "../../services/firebase/cars-service.js";
import { Database } from "firebase/database";

export default function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getAllCars = () => {
      CarService.getAllCars().then((items) => {
        let auxCars = [];
        console.log(items);

        items.forEach((i) => {
          const key = i.key;
          const data = i.val();
          console.log(key, data);

          let auxCar = null;

          data.map((model) => {
            auxCar = {
              make: model.Make,
              model: model.Model,
              fuel_consumption: model.fuel_consumption,
              img: model.img,
              people: model.people,
              transmission: model.transmission
            };
            auxCars.push(auxCar);
          });
          
          console.log(auxCars)
        });
        setCars([...auxCars]);
      });
    };

    getAllCars();
  }, []);

  return cars;
}
