Dropzone.options.myform = {
  paramName: "file",
  maxFilesize: 2,
  disablePreviews: true,
  accept: function (file, done) {
    document.getElementById("upload").style.backgroundImage =
      "url(" + URL.createObjectURL(file) + ")";
    console.log(file);

    const reader = new FileReader();
    reader.onload = function (event) {
      const dataURL = event.target.result;
      // console.log(dataURL);
      const parts = dataURL.split(",", 2);
      const fileDatURL = parts[1];
      localStorage.setItem("fileDatURL", fileDatURL);
      console.log(parts[0]);
      // console.log(fileDatURL);
    };
    reader.readAsDataURL(file);

    done();
  },
};
