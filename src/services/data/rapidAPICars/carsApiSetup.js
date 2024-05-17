export default async function fetchCars(model) {

  const headers = {
    // Your rapid api configs
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`,

    {
      headers: headers,
    }
  )

  const data = await response.json();

  return data
}
