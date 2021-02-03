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
            articles:"21",
            followers:"1.2k",
            rating:"8.7"
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')