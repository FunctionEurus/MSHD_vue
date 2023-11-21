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
    return apiClient.get(`/disaster/${id}`);
  },

  async createDisaster(id: string, code: string) {
    return apiClient.post('/disaster/', code);
  },

  async updateDisaster(id: string, code: string) {
    return apiClient.patch(`/disaster/${id}`, code);
  },

  async deleteDisaster(id: string) {
    return apiClient.delete(`/disaster/${id}`);
  },
};