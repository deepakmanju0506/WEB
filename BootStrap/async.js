const weather = async () => {
  const city = document.getElementById("city").value;
  const key = "a71713505388939e5437bbd9e1f4f0b9";
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
  
  console.log(resp.data);
  document.getElementById("humidity").innerText = `Humidity: ${resp.data.main.humidity}%`;
};

