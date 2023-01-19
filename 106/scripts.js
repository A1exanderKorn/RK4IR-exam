let range = document.getElementById('size');

function change_size() {
    let image = document.getElementById('timetopudge');
    image.style.width = range.value + "%";
}

range.addEventListener("mousemove", change_size); // в теории достаточно чего-то одного, но так картинка меняется и при простом нажатии на слайдер, и если водить ползунком
range.addEventListener("change", change_size);