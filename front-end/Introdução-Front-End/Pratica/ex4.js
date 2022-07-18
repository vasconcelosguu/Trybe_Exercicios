const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => console.log (`Mars temperature is: ${getMarsTemperature()} degree celsius`), messageDelay);
};

sendMarsTemperature(getMarsTemperature);