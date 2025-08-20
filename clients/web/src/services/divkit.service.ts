import { apiService } from './api.service';

class DivKitService {
  async getLayout(layoutName: string) {
    return await apiService.get(`/layouts/${layoutName}`);
  }

  async getTemplate(templateName: string) {
    return await apiService.get(`/templates/${templateName}`);
  }

  async getData(dataType: string) {
    return await apiService.get(`/data/${dataType}`);
  }
}

export const divkitService = new DivKitService();