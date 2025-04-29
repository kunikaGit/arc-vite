import {

  getHeader,
  handleCatchErrors,
} from "../utlis/customFn";
import axios from "./axios";

class BasicProvider {
  constructor(url = "", navigate, isUser = false, dispatch = false) {
    this.url = url;
    this.navigate = navigate;
    this.isUser = isUser;
    this.dispatch = dispatch;
  }

  // Common function to get headers
  async getHeaders() {
    const config = { ...getHeader() };
    config.headers.access_token =  sessionStorage.getItem("arc_accessToken");
    return config;
  }

  // GET request post Method
  async getRequest() {
    try {
      const headers = await this.getHeaders();
      const response = await axios.get(this.url, headers);
      return response.data;
    } catch (error) {
      return handleCatchErrors(error, this.navigate);
    }
  }

  // GET Post Put Delete request post Method
  async getPostPutDelRequest(formdata = {}) {
    try {
      const headers = await this.getHeaders();
      const response = await axios.post(this.url, formdata, headers);
      return response.data;
    } catch (error) {
      const { status } = error.response;
      if (status == 403) {
        if (this.dispatch != false) {
          if (this.isUser) {
            // this.dispatch(userSetIsLogout());
          } else {
            // this.dispatch(adminSetIsLogout());
          }
        }
      }

      return handleCatchErrors(error, this.navigate);
    }
  }

  // POST request
  async postRequest(data) {
    try {
      const response = await axios.post(this.url, data);
      return response.data;
    } catch (error) {
      return handleCatchErrors(error);
    }
  }

  // PUT request
  async patchRequest(formdata) {
    try {
      const response = await axios.patch(this.url, formdata);
      return response.data;
    } catch (error) {
      return handleCatchErrors(error, this.navigate);
    }
  }

  // DELETE request
  async deleteRequest() {
    try {
      // const headers = await this.getHeaders();
      const response = await axios.delete(this.url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return handleCatchErrors(error, this.navigate);
    }
  }

  // GET request post Method
  async getRequestEmailHeader(email) {
    try {
      const headers = await this.getHeaders();
      const config = { ...headers };
      config.headers.email = email;
      const response = await axios.get(this.url, config);
      return response.data;
    } catch (error) {
      return handleCatchErrors(error, this.navigate);
    }
  }


}

// Return a new instance directly from the class
export default BasicProvider;
