// If you are using JavaScript/ECMAScript modules:
import Dropzone from "dropzone";

// If you are using CommonJS modules:
// const { Dropzone } = require("dropzone");

// If you are using an older version than Dropzone 6.0.0,
// then you need to disabled the autoDiscover behaviour here:
Dropzone.autoDiscover = false;

let myDropzone = new Dropzone("#my-form");
myDropzone.on("addedfile", (file) => {
  console.log(`File added: ${file.name}`);
});

// Dropzone.options.myform = {
//   maxFilesize: 25, //MB
//   dictDefaultMessage: "Drag and Drop Posters    or click",
//   acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.pdf,.pub",

//   accept: function(file, done) {
//       console.log("uploaded"); //debuging the upload
//       done();
//   }
