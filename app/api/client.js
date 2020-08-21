import { create } from "apisauce";

import cache from "../utilities/cache";

export default apiClient = create({
  baseURL: "http://192.168.1.69:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  console.log("Calling API");
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    console.log("Response is OK");
    cache.store(url, response.data);
    return response;
  }
  console.log("Response not OK");

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};
