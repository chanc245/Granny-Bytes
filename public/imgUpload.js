Dropzone.options.myform = {
  paramName: "file",
  maxFilesize: 2,
  disablePreviews: true,
  accept: function (file, done) {
    document.getElementById("upload").style.backgroundImage =
      "url(" + URL.createObjectURL(file) + ")";
    console.log(file);
    localStorage.setItem("file", file);

    // let imgDish = JSON.parse(localStorage.getItem("file"));
    // console.log(imgDish.dataURL);

    done();
  },
};
