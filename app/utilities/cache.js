import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const expiryMinutes = 5;

const store = async (key, value) => {
  const item = {
    value,
    timestamp: Date.now(),
  };
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const json = await AsyncStorage.getItem(key);
    const item = JSON.parse(json);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryMinutes;
};

export default {
  store,
  get,
};
