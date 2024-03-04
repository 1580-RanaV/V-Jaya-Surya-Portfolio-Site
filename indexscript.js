function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
        }
    });
}
function startCounter() {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const projectsPara = document.getElementById('projectsPara');
    const intervalId = setInterval(() => {
        counter ++;
        if (counter < 150) {
            counterElement.textContent = counter;
        } else if (counter === 150) {
            counterElement.textContent = counter + "+";
            projectsPara.innerHTML = projectsPara.innerHTML.replace('150 projects', '<span style="color: red;">150 projects</span>');
            clearInterval(intervalId);
        }
    }, 40);
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(document.getElementById('projectsPara'));

window.onload = function() {
    var marqueeContainer = document.getElementById('marqueeContainer');
    var cloneContainer = marqueeContainer.cloneNode(true);
    marqueeContainer.appendChild(cloneContainer);
    var offset = 0;
    var speed = 2; // Adjust scrolling speed (higher values mean faster scrolling)
    function moveMarquee() {
        offset -= speed;
        if (offset < -marqueeContainer.offsetWidth) {
            offset = 0;
        }
        marqueeContainer.style.transform = 'translateX(' + offset + 'px)';
        requestAnimationFrame(moveMarquee);
    }
    moveMarquee();
};