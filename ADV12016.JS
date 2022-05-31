document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})


function solution(text) {
    textsplit = text.split(/[ ,]+/);   // split space AND comma at the same time
    let direction = 0;       //facing north supposedly
    let x = 0;   // horizontal = 0
    let y = 0;  // vertical = 0
    let blockaway = 0; // final
    for (i = 0; i < textsplit.length; i++) {
        if (textsplit[i][0] == "R") {
            direction = (direction + 1) % 4
        }
        else if (textsplit[i][0] == "L") {
            direction = (direction +3) % 4
        }
        console.log(direction);
        if (direction == 0) {
            y += parseInt(textsplit[i][1]);
        }

        if (direction == 1) {
            x += parseInt(textsplit[i][1]);
        }

        if (direction == 2) {
            y -= parseInt(textsplit[i][1]);
        }

        if (direction == 3) {
            x -= parseInt(textsplit[i][1]);
        }
    }
    // console.log(direction);     //1
    // console.log(x);             //19
    // console.log(y);             //42                
    blockaway = x + y;
    // console.log(blockaway);


};


