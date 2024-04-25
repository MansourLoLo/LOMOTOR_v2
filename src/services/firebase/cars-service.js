import db from './firebase.config'
import {ref, get} from "firebase/database"

//Referencia al directorio /cars
const dbrRef = ref(db, "/cars")

const getAllCars = () =>{
  return get(dbrRef)
}

export default {
  getAllCars
}