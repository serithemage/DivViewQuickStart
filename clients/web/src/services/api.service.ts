import axios, { AxiosInstance } from 'axios';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: '/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }

  async get(url: string) {
    return this.client.get(url);
  }

  async post(url: string, data: any) {
    return this.client.post(url, data);
  }

  async put(url: string, data: any) {
    return this.client.put(url, data);
  }

  async delete(url: string) {
    return this.client.delete(url);
  }
}

export const apiService = new ApiService();