/**
 * @author Matteo Fattorini
 */

const app = new Vue({
  el: "#body",
  data: {
    filters : "",
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
      // if (this.filters == "") {
      //   this.filters = "all";
      // }
      try {
        let res = await axios.get(
          "http://localhost/php-ajax-dischi/Es-2/server.php",
          {
            params: {
              filter : this.filters
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
