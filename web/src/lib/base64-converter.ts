export function convertToBase64(file: File) {
  let base64String = ""

  let reader = new FileReader()
  console.log("next")

  reader.onload = function () {
    // @ts-ignore
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "")

    let imageBase64Stringsep = base64String

    // alert(imageBase64Stringsep);
    console.log(base64String)
  }
  reader.readAsDataURL(file)

  return base64String
}
