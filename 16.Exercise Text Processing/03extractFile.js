function extractFile(input) {
    let extracted = input.split("\\");

    let fileName = extracted[extracted.length - 1].split(".");
    let extension = fileName.pop();

    fileName = fileName.join(".");
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')