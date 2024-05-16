export default async function fetchCars(model) {
  const headers = {
    "X-RapidAPI-Key": "ba4876aa4emsh4e8c597b325df8ap1ca0f6jsn74e8f77d5b15",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`,

    {
      headers: headers,
    }
  );

  const data = await response.json();

  return data;
}
