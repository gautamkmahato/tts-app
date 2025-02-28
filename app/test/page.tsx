'use client'

import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const TemplateEditor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      components: "<div>Hello World!</div>",
      style: ".my-class { color: red; }",
    });
  }, []);

  return <div id="editor"></div>;
};



export default function Email() {
  return (
    <TemplateEditor />
  )
}
