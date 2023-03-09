import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";
import QuestionService from "../services/QuestionService.js";
import MapService from "../services/MapService";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  isError = false;
  questions = [];
  station = {};

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setError(error) {
    this.isError = error;
  }

  async getStation(id) {
    try {
      const response = await MapService.getStation(id);
      this.station = response.data;
    } catch (error) {
      this.setError(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      this.setAuth(false);
      this.setUser({});
      this.setError(false);
    } catch (error) {
      this.setError(error.response?.data?.message);
    }
  }

  async getQuestions() {
    try {
      const response = await QuestionService.fetchQuestions();
      this.questions = [...response.data];
      this.setError(false);
    } catch (error) {
      this.setError(error.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("role", response.data.user.role);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setError(false);
    } catch (error) {
      this.setError(error.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
