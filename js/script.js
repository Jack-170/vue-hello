const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'Ciao a Tutti!'
        };
    }
});

app.mount('#app');
