const { createApp } = Vue  //creo un objeto VUE llamdo createApp
 createApp({
   data() {  // define los datos de VUE
     return {
       url: 'https://colibri.pythonanywhere.com/productos',
       productos: [],
       cantidad:0
     }
   },
   methods: {  // define los métodos o funciones
     fetchData(url) { 
      console.log(12+"-"+this.url)
       fetch(url)
         .then(response => response.json())
         .then(data => {
           console.log(data)
//           this.productos=data
           this.productos=data.map( x => {x.cantidad=""; return x})  // agrego un campo cantidad a la lista producto
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     comprar(item){
      let producto = {
        cod_barra:item.cod_barra,
        marca:item.marca,
        nombre:item.nombre,
        precio: item.precio,
        stock: item.stock-item.cantidad ,
        imagen: item.imagen
      }
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    //url=this.url+'/'+item.id
    console.log(39+"-"+this.url)
    fetch(this.url+'/'+item.id, options)
        .then(function () {
            alert("Registro modificado")
            location.reload(); // recarga el json luego de comprar producto
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })  


      }
    },
   
   created() {  // llama a los métodos que se tienen que ejecutar al inicio
     this.fetchData(this.url)                                                      
   }
 
 }).mount('#app')


