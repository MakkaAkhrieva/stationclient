import $api from "../http";

export default class QuestionService {
  static async fetchQuestions() {
    return await $api.get("/questions");
  }
}
