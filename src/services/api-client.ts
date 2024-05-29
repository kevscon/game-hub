import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1c40f884ce3640babab0033139847406'
  }
})