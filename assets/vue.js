window.onload = vueInit;

function vueInit() {
  new Vue({
    el: "#imageOne",
    data: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Carl_Larsson-Lath%C3%B6rnet.jpg",
    },
    methods: {
      change: function () {
        console.log("hovered");
        console.log();
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blomsterf%C3%B6nstret_av_Carl_Larsson_1894.jpg";
      },
    },
  });
}
