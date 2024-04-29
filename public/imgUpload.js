Dropzone.options.myform = {
  paramName: "file",
  maxFilesize: 2,
  disablePreviews: true,
  accept: function(file, done) {
    document.getElementById("upload").style.backgroundImage = "url(" + URL.createObjectURL(file) + ")";
    console.log(file);
    
    done();
  }
};
