const app = Vue.createApp({
    data() {
        return {
           infos: [
            {
                name: "John Doe",
                age: 30,
                city: "New York",
                img: "imgs/1.webp",
                isfav: true
            },
            {
                name: "John Htwe",
                age: 35,
                city: "Yangon",
                img: "imgs/2.webp",
                isfav: true
            },
            {
                name: "John Ssnju",
                age: 36,
                city: "Thanlyin",
                img: "imgs/3.webp",
                isfav: true
            },
           ],
            showbook: true,
            link: "https://www.google.com",
        }
    },
    methods: {
        overHandler(event, dataHover) {
            console.log("Mouse Over is working", event.bubbles, dataHover);
        },
        outHandler(event, dataOut) {
            console.log("Mouse Out is leaving", event.type, dataOut);
        },
        doubleHandler(event, dataDouble) {
            console.log("Double click is working", event, dataDouble);
        }
    },
    computed: {
        filteredInfo() {
            return this.infos.filter(info => info.isfav);
        }
    }
});

app.mount('#app')