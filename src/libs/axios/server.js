import axios from "axios";

// Create an Axios instance
const backendServer = axios.create({
  baseURL: "https://gold-goose-774583.hostingersite.com/api/v1/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Example of a GET request
export const getData = async (
  endpoint,
  params,
  headers
) => {
  try {
    const response = await backendServer.get(endpoint, { params, headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example of a POST request
export const postData = async (endpoint, data, headers) => {
  try {
    const response = await backendServer.post(endpoint, data, {
      headers: { ...headers },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default backendServer;
