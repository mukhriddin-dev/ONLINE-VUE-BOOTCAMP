const app = Vue.createApp({
    data() {
        return {
            app: "Telegram",
            social: ["facebook", "twitter", "telegram", "instgram"],
            isname: "Mukhriddin Khodiev",
        };
    },

    methods: {
        removeEl() {
            this.social.pop();
        },
    },
});

app.mount("#root");
