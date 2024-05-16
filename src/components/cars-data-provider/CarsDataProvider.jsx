import React, { useEffect, useState } from "react";
import fetchCars from "../../services/data/rapidAPICars/carsApiSetup";
import CarsList from "../car-list/CarsList";

export default function CarsDataProvider() {
  // // Variable de estado para guardar los el array de objetos de coche de la API
  // const [carsData, setCarsData] = useState([]);

  // const [arrayCars, setArrayCars] = useState([])

  // // Funcion asincrona para obtener informacion sobre un coche a partir del modelo usando api ninjas
  // const getCarsApi = async (model) => {
  //   try {
  //     // Fetch a la api pasandole el modelo del coche
  //     const data = await fetchCars(model);
  //     console.log(data)
  //     setCarsData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // console.log("Cars data: ", carsData);

  // // Una constante para guardar el array de modelos de coches de mi BD
  // const carModels = CarsList();
  // console.log("Cars models: ", carModels)

  // // Funcion para obtener informacion de cada uno de mis coches de mi BD apartir de api ninjas
  // const getCarsDB = () => {
  //   // Recorro los modelos de coches de mi BD 
  //   carModels.map((item, index) =>{
  //     console.log("Array car models: ", item.model.splice(1))
  //     // Array puro de los modelos de coches de mi BD
  //     setArrayCars(item.model.splice(1))
  //     console.log("Array cars: ", arrayCars)

  //     // Por cada modelo se lo paso por parametros a mi funcion que obtiene informacion sobre ese coche apartir del modelo
  //     arrayCars.forEach((carModelArray) => {
  //       getCarsApi(carModelArray)
  //     });

  //   })
  // };

  // // A modo de prueba para probar el uso de las funciones
  // useEffect(() =>{
  //   getCarsDB()
  // }, [])


  const [carsData, setCarsData] = useState([]);
  const [arrayCars, setArrayCars] = useState([]);

  const carModels = CarsList();

const getCarsApi = async (model) => {
  
  try {
    const data = await fetchCars(model);
    // Verificar si ya tenemos el modelo en carsData
    const existingModel = carsData.find((car) => car.model === model);
    if (!existingModel && data.length > 0) {
      setCarsData((prevCarsData) => [...prevCarsData, data[0]]);
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  const updateCarsData = async () => {
    const models = carModels.map((item) => item.model.slice(1)).flat();
    setArrayCars(models);
  };

  updateCarsData();
}, [carModels]);

useEffect(() => {
  const getCarsFromDB = async () => {
    arrayCars.forEach((carModel) => {
      getCarsApi(carModel);
    });
  };

  getCarsFromDB();
}, [arrayCars]);

let infoCars = []

  return (
    <div>
      {carsData.map((car, index) => {

        const infoCar = {
          makeCar: car.make,
          modelCar: car.model
        }

        infoCars.push(infoCar)
        console.log(infoCars)
        
        return (
          <div key={index}>
            <p>{car.make}</p>
            <p>{car.model}</p>
          </div>
        );
      })}
    </div>
  );
}
