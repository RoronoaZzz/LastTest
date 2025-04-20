


const modalBtn = document.querySelector(".open-modal-btn");
const modal = document.getElementById("modal");
const modalContent = document.getElementById('modal-content')
const Form = document.querySelector('.myForm')


const closeBtn = document.querySelector(".close");

modal.style.backgroundColor = "rgba(255, 255, 255, 0)";

function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    modal.style.backgroundColor = "rgba(255, 255, 255, 1)";
    setTimeout(() => {
        modalContent.style.transform = "translate(-50%, -50%) scale(1)";
    }, 10);
}

function closeModal() {
    modalContent.style.transform = "translate(-50%, -50%) scale(0)";
    modal.style.backgroundColor = "rgba(255, 255, 255, 0)";
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}


modalBtn.addEventListener("click", openModal);


closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


//mask


$(".phone--mask").mask("+7(999) 999-9999");


//clg 



if (modalBtn) {

    Form.addEventListener("submit", function(event) {

        event.preventDefault();

        let username1Value = document.getElementById("username1").value;
        let username2Value = document.getElementById("username2").value;
        let username3Value = document.getElementById("username3").value;

        alert("Username 1: " + username1Value + "   " +
              "Username 2: " + username2Value + "   " +
              "Username 3: " + username3Value);

        console.log("Username 1: " + username1Value);
        console.log("Username 2: " + username2Value);
        console.log("Username 3: " + username3Value);



        document.getElementById("username1").value = "";
        document.getElementById("username2").value = "";
        document.getElementById("username3").value = "";
    });
} else {
    console.error("Элемент не найден или не существует.");
}


//video



const videoPlay = document.querySelector('.button-video');
const videoContainer = document.querySelector('.video-container');

videoPlay.addEventListener('click', openFullscreen);

function openFullscreen() {
    videoContainer.style.display = 'block'; // Показываем контейнер с видео
    let video = document.getElementById("myVideo");
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }

    // Слушаем событие изменения режима полноэкранного режима и скрываем видео при выходе из него
    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('msfullscreenchange', exitHandler);

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.msFullscreenElement) {
            videoContainer.style.display = 'none'; // Скрываем контейнер с видео
            document.removeEventListener('fullscreenchange', exitHandler);
            document.removeEventListener('webkitfullscreenchange', exitHandler);
            document.removeEventListener('msfullscreenchange', exitHandler);
        }
    }
}
