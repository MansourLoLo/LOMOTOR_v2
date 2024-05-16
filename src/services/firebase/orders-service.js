import db from './firebase.config'
import {ref, get} from "firebase/database"

//Referencia al directorio /cars
const dbrRef = ref(db, "/orders")

const getAllOrders = () =>{
  return get(dbrRef)
}

export default {
  getAllOrders
}