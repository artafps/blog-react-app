import axios from "axios";

export function getDatatxt() {
  return axios.get(
    "https://artafp.ir/data.txt"
  );
}
export function getBlogtxt() {
  return axios.get(
    "https://artafp.ir/blog.txt"
  );
}
export function getGBlogtxt() {
  return axios.get(
    "https://artafp.ir/gblog.txt"
  );
}
export function getProjecttxt() {
  return axios.get(
    "https://artafp.ir/project.txt"
  );
}
export function getHtmlPage(url) {
  return axios.get(url);
}
