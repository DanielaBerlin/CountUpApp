const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = 0;

    function updateCounter() {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)
                }`;
            setTimeout(update, 10);
        }
    }
})