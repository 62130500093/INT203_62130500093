const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }
}
Vue.createApp(app).mount('#app');

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
        }
    });
});