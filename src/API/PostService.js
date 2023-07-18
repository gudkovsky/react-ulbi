import axios from "axios";

export default class PostService {
  static async getAll(
    limit = 10,
    page = 1,
    url = "https://jsonplaceholder.typicode.com/posts"
  ) {
    const response = await axios(url, {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return response;
  }
}
