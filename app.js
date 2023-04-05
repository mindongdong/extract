document.addEventListener("DOMContentLoaded", function () {
  const imageWrapper = document.getElementById("imageWrapper");
  const xrayImage = document.querySelector(".xray-image");

  imageWrapper.addEventListener("mousemove", function (event) {
    const bounds = imageWrapper.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    xrayImage.style.webkitMaskPosition = `${x - 100}px ${y - 100}px`;
  });

  imageWrapper.addEventListener("mouseout", function () {
    xrayImage.style.webkitMaskPosition = "-200px -200px";
  });

  xrayImage.addEventListener("click", (event) => {
    const bounds = xrayImage.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    console.log(x, y);
    const spotImages = document.querySelectorAll(".spot-image");
    const words = document.querySelectorAll(".word");
    if (x > 693 - 50 && x < 693 + 50 && y > 637 - 50 && y < 637 + 50) {
      //가온광장
      console.log("A1");
      spotImages[0].style.display = "block";
      setTimeout(() => {
        spotImages[0].style.opacity = "1";
        setTimeout(() => {
          words[0].style.display = "block";
          words[0].style.opacity = "0.8";
        }, 1000);
      }, 100);
    } else if (x > 852 - 50 && x < 852 + 50 && y > 685 - 50 && y < 685 + 50) {
      //도서관
      console.log("A2");
      spotImages[1].style.display = "block";
      setTimeout(() => {
        spotImages[1].style.opacity = "1";
        setTimeout(() => {
          words[1].style.display = "block";
          words[1].style.opacity = "0.8";
        }, 1000);
      }, 100);
    } else if (x > 596 - 50 && x < 596 + 50 && y > 886 - 50 && y < 886 + 50) {
      //원형관
      console.log("E");
      spotImages[2].style.display = "block";
      setTimeout(() => {
        spotImages[2].style.opacity = "1";
        setTimeout(() => {
          words[2].style.display = "block";
          words[2].style.opacity = "0.8";
          imageWrapper.style.opacity = "0";
          setTimeout(() => {
            const text = document.querySelectorAll(".four");
            text[0].style.display = "block";
            imageWrapper.style.display = "none";
            setTimeout(() => {
              text[1].style.display = "block";
            }, 2000);
          }, 3000);
        }, 1000);
      }, 100);
    } else if (x > 784 - 50 && x < 784 + 50 && y > 350 - 50 && y < 350 + 50) {
      //국악대
      console.log("D");
      spotImages[3].style.display = "block";
      setTimeout(() => {
        spotImages[3].style.opacity = "1";
        setTimeout(() => {
          words[3].style.display = "block";
          words[3].style.opacity = "0.8";
        }, 1000);
      }, 100);
    } else if (x > 650 - 50 && x < 650 + 50 && y > 360 - 50 && y < 360 + 50) {
      //연못
      console.log("U");
      spotImages[4].style.display = "block";
      setTimeout(() => {
        spotImages[4].style.opacity = "1";
        setTimeout(() => {
          words[4].style.display = "block";
          words[4].style.opacity = "0.8";
        }, 1000);
      }, 100);
    } else if (x > 665 - 50 && x < 665 + 50 && y > 185 - 50 && y < 185 + 50) {
      //공대
      console.log("I");
      spotImages[5].style.display = "block";
      setTimeout(() => {
        spotImages[5].style.opacity = "1";
        setTimeout(() => {
          words[5].style.display = "block";
          words[5].style.opacity = "0.8";
        }, 1000);
      }, 100);
    } else if (x > 609 - 50 && x < 609 + 50 && y > 556 - 50 && y < 556 + 50) {
      //중문관
      console.log("T");
      spotImages[6].style.display = "block";
      setTimeout(() => {
        spotImages[6].style.opacity = "1";
        setTimeout(() => {
          words[6].style.display = "block";
          words[6].style.opacity = "0.8";
        }, 1000);
      }, 100);
    }
  });
});
