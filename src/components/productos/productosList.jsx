const productosList = () =>{
  return [
    //Cerveza
    { id:"1", categoriaId:"Cerveza", name:"Andes Rubia", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-rubia.webp", stock:200},
    { id:"2", categoriaId:"Cerveza", name:"Andes Roja", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-roja.webp", stock:200},
    { id:"3", categoriaId:"Cerveza", name:"Andes Ipa Andina", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-ipa-andina.webp", stock:200},
    { id:"4", categoriaId:"Cerveza", name:"Brahma", descripcion:"Cerveza", precio: 80,imagen: "/images/bebidas/brahma.webp", stock:200},
    { id:"5", categoriaId:"Cerveza", name:"Budweiser", descripcion:"Cerveza", precio:90, imagen: "/images/bebidas/budweiser.webp", stock:200},
    { id:"6", categoriaId:"Cerveza", name:"Corana", descripcion:"Cerveza", precio:100,  imagen: "/images/bebidas/corona.webp", stock:200},
    { id:"7", categoriaId:"Cerveza", name:"Quilmes", descripcion:"Cerveza", precio:80, imagen: "/images/bebidas/quilmes.webp", stock:200},
    { id:"8", categoriaId:"Cerveza", name:"Schneider", descripcion:"Cerveza", precio:85, imagen: "/images/bebidas/schneider.webp", stock:200},
    { id:"9", categoriaId:"Cerveza", name:"Stella Artois", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/stella-artois.webp", stock:200},
    
    //Vinos
    { id:"10", categoriaId:"Vinos", name:"Dada 1", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada1.webp", stock:200},
    { id:"11", categoriaId:"Vinos", name:"Dada 2", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada2.webp", stock:200},
    { id:"12", categoriaId:"Vinos", name:"Dada 3", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada3.webp", stock:200},
    { id:"13", categoriaId:"Vinos", name:"Dada 8", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada8.webp", stock:200},
    { id:"14", categoriaId:"Vinos", name:"Dolores Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dolores-malbec.webp", stock:200},
    { id:"15", categoriaId:"Vinos", name:"Elementos Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/elementos-malbec.webp", stock:200},
    { id:"16", categoriaId:"Vinos", name:"La linda Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/la-linda-malbec.webp", stock:200},
    { id:"17", categoriaId:"Vinos", name:"Latitud 33 Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/latitud33-malbec.webp", stock:200},
    { id:"18", categoriaId:"Vinos", name:"latitud 33 Carbenet Sauvignon", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/latitud33-cabernet-sauvignon.webp", stock:200},
    { id:"19", categoriaId:"Vinos", name:"Los Intocables Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/trumpeter-malbec.webp", stock:200},
    { id:"20", categoriaId:"Vinos", name:"UXMAL Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/uxmal-malbec.webp", stock:200},
    
    //Espumantes
    { id:"21", categoriaId:"Espumantes", name:"Casa Bower", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/casa-bower.webp", stock:200},
    { id:"22", categoriaId:"Espumantes", name:"Chandon", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/chandon.webp", stock:200},
    { id:"23", categoriaId:"Espumantes", name:"Deseado Rose", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/deseado-rose.webp", stock:200},
    { id:"24", categoriaId:"Espumantes", name:"Nieto Senetiner", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/nieto-senetiner.webp", stock:200},
    { id:"25", categoriaId:"Espumantes", name:"Santa Julia", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/santa-julia.webp", stock:200},
    //Destiladod
    { id:"26", categoriaId:"Destilados", name:"Absolut", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/absolut.webp", stock:200},
    { id:"27", categoriaId:"Destilados", name:"Gin Tanqueray", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/gin-tanqueray.webp", stock:200},
    { id:"28", categoriaId:"Destilados", name:"Grey Goose", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/grey-goose.webp", stock:200},
    { id:"29", categoriaId:"Destilados", name:"Skyy", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/skyy.webp", stock:200},
    { id:"30", categoriaId:"Destilados", name:"Smirnoff", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/smirnoff.webp", stock:200},
    { id:"31", categoriaId:"Destilados", name:"Whisky Jameson", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/whisky-jameson.webp", stock:200},
  
    //Aperitivos
    { id:"32", cadegoriaID:"Aperitivos", name:"Aperol", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/Aperol.webp", stock:200},
    { id:"33", categoriaId:"Aperitivos", name:"Campari", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/campari.webp", stock:200},
    { id:"34", categoriaId:"Aperitivos", name:"Cynar", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/cynar.webp", stock:200},
    { id:"35", categoriaId:"Aperitivos", name:"Fernet Branca", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/fernet-branca.webp", stock:200},
    { id:"36", categoriaId:"Aperitivos", name:"Gancia", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/gancia.webp", stock:200},
    { id:"37", categoriaId:"Aperitivos", name:"Jagermeister", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/jagermeister.webp", stock:200},
   
  ];
}  

 
const ItemsPromise = new Promise((rej, res) => {
  setTimeout(() => {
    rej(productosList("1"));
  }, 2000);
});



export default ItemsPromise