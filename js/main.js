const { createApp } = Vue

createApp({
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com/users",
      clientesAll: [], //arreglo para mostrar
      clientes: [],
      ciudad: "Todas",
    }
  },
  
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.clientesAll = data
         
       
        })
        .catch(error => alert("Error" + error))
    },

   

  },
  created() {
    this.fetchData(this.url)
  }
}).mount('#app')