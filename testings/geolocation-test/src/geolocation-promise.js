async function getGeolocation() {
  const response = await navigator.geolocation.getCurrentPosition(position => {
    return [position.coords.latitude, position.coords.longitude];
  });
  return response;
}

export default getGeolocation;
