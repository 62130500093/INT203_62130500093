const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown : true,
            url: "https://www.sit.kmutt.ac.th",
            firstname: "Sahachai",
            lastname: "Senarak",
            image:"images/profilekmutt.jpg",
            career: "sophomore at SIT KMUTT",

        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')