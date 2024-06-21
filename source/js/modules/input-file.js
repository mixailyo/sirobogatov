function inputFileInit() {
  let inputFiles = document.querySelectorAll('.custom-input--file input[type=file]');
  
  if (inputFiles.length) {
    inputFiles.forEach(inputFile => {
      inputFile.addEventListener('change', function() {
        let file = this.files[0];
        this.closest('.custom-input--file').querySelector('.custom-input-file-text').innerHTML = file.name;
      });
    })
  }
}

export { inputFileInit }