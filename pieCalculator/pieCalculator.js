$(()=> {
    
});

const canvas = document.getElementById("myCanvas");

function drawMatrix() {
    const ctx = canvas.getContext("2d");
    for (let x = 1; x <= 8; x++) {
    
        var cornerX = 0;
        var cornerY = 0;
        var flip = false;
        switch (x%4) {
            case 0:
                cornerX = 0;
                cornerY = 0;
                break;
            case 1:
                cornerX = 0;
                cornerY = 800;
                break;
            case 2:
                cornerX = 800;
                cornerY = 800;
                break;
            case 3:
                cornerX = 800;
                cornerY = 0;
                break;
            default:
                break;
        }
    
        x > 4 ? flip = true : null;
    
        for (let i = 0; i <= 800; i+=12) {
            if ((cornerX !== 0 || cornerY !== 800) && (cornerX !== 800 || cornerY !== 0)) {
                ctx.moveTo(cornerX, cornerY);
                flip ? ctx.quadraticCurveTo(i, cornerX, i, cornerY === 800 ? 0: 800):ctx.quadraticCurveTo(cornerX, i, cornerX === 800 ? 0: 800, i);
                // ctx.quadraticCurveTo(0, 10, 0, 0);
                ctx.stroke();
            }
        }
    }
}

function drawCircle(percentages) {
    var num = 0;
    percentages.sort((a, b) => b-a)
    percentages.forEach(percentage => {
        var clr = ["red", "green", "blue"][num]
        percentage *= 2;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(400, 400);
        ctx.arc(400, 400, 200, Math.PI * (2 - percentage), 2 * Math.PI);
        ctx.fillStyle = clr;
        ctx.lineWidth = 5;
        ctx.fill();
        num++;
    });
}

drawCircle([0.3, 0.5, 0.1, 0.2]);