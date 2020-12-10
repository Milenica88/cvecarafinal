window.addEventListener("load", () => {
    // START
    window.addEventListener("scroll", () => {
        var videoDOM = document.querySelector(".cv-banner-background");
        videoDOM.style.setProperty("transform", `translateY(${window.scrollY/2}px) scale(${1+(0.001*window.scrollY)})`);
        videoDOM.style.setProperty("filter", `brightness(0.7) blur(${Math.floor(window.scrollY/20)}px)`);
    })
    // END
})