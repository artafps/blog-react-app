import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { marked } from './../../node_modules/marked/src/marked';

import MainLayout from "./../layouts/MainLayout";
import BarLayout from "./../layouts/BarLayout";



function MainBlog() {
  

  return (
    <MainLayout>
      <BarLayout />
      <div className="containerBlog">
        arta
        
      </div>
    </MainLayout>
  );
}

export default MainBlog;
