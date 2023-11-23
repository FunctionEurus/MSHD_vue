// api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getDisasters() {
    return apiClient.get('/disaster/');
  },

  async getDisasterById(id: string) {
    apiClient.get(`/disaster/${id}`).then(response => {
      return response.data
    });
  },

  async createDisaster(code: string) {
    const obj = { code: code }
    const jsonString = JSON.stringify(obj);
    // console.log(jsonString)
    return apiClient.post('/disaster/', jsonString);
  },

  async updateDisaster(id: string, code: string) {
    return apiClient.patch(`/disaster/${id}`, code);
  },

  async deleteDisaster(id: string) {
    return apiClient.delete(`/disaster/${id}`);
  },
};