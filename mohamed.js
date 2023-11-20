function ahmedMoha() {
    var buttonclick = document.getElementsByClassName("buttonclick");
    var datalist = document.getElementsByClassName("datalist");
    var _loop_1 = function (index) {
        buttonclick[index].addEventListener("click", function () {
            if (datalist[index].style.height === '') {
                datalist[index].style.display = "block";
                datalist[index].style.height = datalist[index].scrollHeight + "px";
            }
            else {
                datalist[index].style.height = "";
                datalist[index].style.display = "none";
            }
        });
    };
    for (var index = 0; index < buttonclick.length; index++) {
        _loop_1(index);
    }
}
ahmedMoha();
