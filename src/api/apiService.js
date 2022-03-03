import axiosInstance from "./axios";

class ApiService {
    async Login(data) {
      const response = await axiosInstance.post(
        `user/authenticate`,
        data
      );
      return response;
    }
    async GetAllSchoolAdmin() {
      const response = await axiosInstance.get(
        `admin/getAllSchoolAdmin`
        
      );
      return response;
    }

    async CreateSchoolAdmin(data) {
      const response = await axiosInstance.post(
        `admin/SchoolAdmin`,
        data
      );
      return response;
      
    }
    async EditSchoolAdmin(data,params) { 
      const response = await axiosInstance.put(
        `admin/updateSchoolAdmin/${params}`,
        data
      );
      return response;
      
    }

    async DeleteSchoolAdmin(params) { 
      const response = await axiosInstance.delete(
        `admin/deleteSchoolAdmin/${params}`,
      );
      return response;
      
    }
  }
    export default new ApiService();