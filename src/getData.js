import axios from "axios";

export function getDataJson() {
  return axios.get(
    "https://artafp.ir/data.txt"
  );
}
export function getHtmlPage(url) {
  return axios.get(url);
}
