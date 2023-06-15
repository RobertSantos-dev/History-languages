import { Platform } from 'react-native';
import axios from "axios";

const PORT = 3005;

// const iosUrl = 'http://localhost:3005';
// const androidUrl = 'http://10.0.2.2:3005';
// const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

const api = axios.create({
  baseURL: 'http://localhost:3005',
  headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' }
});


export default api;
