import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (data, config = null) => client.post(endpoint, data);

export default { getListings, postListing };
