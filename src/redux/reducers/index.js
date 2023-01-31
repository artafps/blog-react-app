import { combineReducers } from "redux";
import { allData } from "./data/data";
import { allBlog } from "./data/blog";
import { allGBlog } from "./data/gblog";
import { allProject } from "./data/project";
import { imageList } from './data/imageList';

export const reducers = combineReducers({
  data: allData,
  blog: allBlog,
  gblog: allGBlog,
  project: allProject,
  imagelist: imageList,
});
