var message = localStorage.getItem("msg");

if (message != null) {
    const app = {
        data() {
            return {
                msg: message
            }
        }
    }
    Vue.createApp(app).mount('#app');
}

let search = document.getElementById("search-container-sub");
$(document).ready(function () {
    $("#search-element-2-input").on("input", function () {
        if ($(this).val() == "") {
            $("#search-element-3").hide();
            search.style.borderRight = "0";
        }
        else {
            $("#search-element-3").show();
            search.style.borderRight = "1px solid #dfe1e5";
            $("#search-element-3").on("click", function () {
                $("#search-element-2-input").val("");
                $("#search-element-3").hide();
                search.style.borderRight = "0";
            });
        }
    });
});
function searchForm() {
    if ($("#search-element-2-input").val() == "") { }
    else {
        $("#search-element-2").submit();
        localStorage.setItem("msg", $("#search-element-2-input").val());
    }
};
function toHome() {
    localStorage.setItem("msg", null);
    window.open("./index.html", "_self");
}