$(()=> {
    let years = 80;
    let yearsLived = 23;
    let b = 0;
    let colors = ["red", "blue", "green", "yellow", "cyan"];
    for (let i = 0; i < (365 * years); i++) {
        $test = $('<div></div>').addClass("day");
        $main = $('#main');
        
        $test.css("background-color", colors[b%5]);
        if (i < (yearsLived * 365)) {
            $test.css("background-color", "orange");
        } else {
            // $test.addClass("days-left")
        }
        if (Math.floor(i % 2) === 0) {
            // $test.css("background-color", "black");
            // $test.css("border", "1px solid black");
        }
        $main.append($test);
        if (i % (365*5) === 0 && i !== 0) {
            // $test.css("background-color", "black");
            // $test.css("border", "1px solid black");
            // $main.append($('<div></div>').addClass("breakline"));
            b++;
        }
    }
})