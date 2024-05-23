document.addEventListener("DOMContentLoaded", function() {
    var box = document.getElementById("box");
    var pos = 0;
    var direction = 1;
    
    function animate() {
        pos += direction;
        if (pos > 300 || pos < 0) {
            direction *= -1;
        }
        box.style.top = pos + "px";
        requestAnimationFrame(animate);
    }
    
    animate();
});
