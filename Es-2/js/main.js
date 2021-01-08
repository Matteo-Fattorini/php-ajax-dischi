/**
 * @author Matteo Fattorini
 */

const app = new Vue({
  el: "#body",
  data: {
    albums: new Array(),
    currentSelect: null,
  },
  computed: {
    filter() {
      if (this.currentSelect == null) {
        return this.albums;
      } else {
        return this.albums.filter((album) => album.genre == this.currentSelect);
      }
    },
  },

  methods: {
    async getDisks() {
      try {
        let res = await axios.get(
          "http://localhost/php-ajax-dischi/Es-2/server.php",
          {
            params: {
              ID: 12345,
            },
          }
        );
        this.albums = res.data.response;
      } catch {
        alert(`C'è stato un errore! ${err}`);
      }
    },
  },

  mounted() {
    this.getDisks();
  },
});
