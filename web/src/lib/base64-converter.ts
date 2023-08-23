export function convertToBase64(file: File) {
  let reader = new FileReader()

  reader.readAsDataURL(file)
  reader.onload = function () {
    //me.modelvalue = reader.result;
    return reader.result
  }
  reader.onerror = function (error) {
    console.log("Error: ", error)
  }

  return " "
}
