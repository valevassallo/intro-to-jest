import geolocation from "./geolocation-promise";
import mock from "isomorphic-geolocation";

test("geolocation test", async () => {
  const data = await geolocation();
  console.log(data);
  expect(data).toEqual(expect.any(Array));
});
