
const btns = document.querySelectorAll("button");
let value = document.querySelector("#value");
let count = 0;

btns.forEach ( btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        
            if (styles.contains("decrease")) {
            count--;
            } else if (styles.contains("reset")) {
            count = 0;
            } else {
            count++;
            }

            if (count > 0) {
            value.style.color = "green";
            }
            if (count < 0) {
            value.style.color = "red";
            }
            if (count === 0) {
            value.style.color = "black";
            }
            value.textContent = count;
    });
}); 
