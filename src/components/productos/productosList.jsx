const productosList = [
    //Cerveza
    { id:1, categoriaID:"Cerveza", name:"Andes Rubia", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-rubia.webp", stock:200},
    { id:2, categoriaID:"Cerveza", name:"Andes Roja", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-roja.webp", stock:200},
    { id:3, categoriaID:"Cerveza", name:"Andes Ipa Andina", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/andes-ipa-andina.webp", stock:200},
    { id:4, categoriaID:"Cerveza", name:"Brahma", descripcion:"Cerveza", precio: 80,imagen: "/images/bebidas/brahma.webp", stock:200},
    { id:5, categoriaID:"Cerveza", name:"Budweiser", descripcion:"Cerveza", precio:90, imagen: "/images/bebidas/budweiser.webp", stock:200},
    { id:6, categoriaID:"Cerveza", name:"Corana", descripcion:"Cerveza", precio:100,  imagen: "/images/bebidas/corona.webp", stock:200},
    { id:7, categoriaID:"Cerveza", name:"Quilmes", descripcion:"Cerveza", precio:80, imagen: "/images/bebidas/quilmes.webp", stock:200},
    { id:8, categoriaID:"Cerveza", name:"Schneider", descripcion:"Cerveza", precio:85, imagen: "/images/bebidas/schneider.webp", stock:200},
    { id:9, categoriaID:"Cerveza", name:"Stella Artois", descripcion:"Cerveza", precio:100, imagen: "/images/bebidas/stella-artois.webp", stock:200},
    
    //Vinos
    { id:10, categoriaID:"Vinos", name:"Dada 1", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada1.webp", stock:200},
    { id:11, categoriaID:"Vinos", name:"Dada 2", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada2.webp", stock:200},
    { id:12, categoriaID:"Vinos", name:"Dada 3", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada3.webp", stock:200},
    { id:13, categoriaID:"Vinos", name:"Dada 8", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dada8.webp", stock:200},
    { id:14, categoriaID:"Vinos", name:"Dolores Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/dolores-malbec.webp", stock:200},
    { id:15, categoriaID:"Vinos", name:"Elementos Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/elementos-malbec.webp", stock:200},
    { id:16, categoriaID:"Vinos", name:"La linda Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/la-linda-malbec.webp", stock:200},
    { id:17, categoriaID:"Vinos", name:"Latitud 33 Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/latitud33-malbec.webp", stock:200},
    { id:18, categoriaID:"Vinos", name:"latitud 33 Carbenet Sauvignon", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/latitud33-cabernet-sauvignon.webp", stock:200},
    { id:19, categoriaID:"Vinos", name:"Los Intocables Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/trumpeter-malbec.webp", stock:200},
    { id:20, categoriaID:"Vinos", name:"UXMAL Malbec", descripcion:"Vino", precio:300, imagen: "/images/bebidas/vinos/exmal-malbec.webp", stock:200},
    
    //Espumantes
    { id:21, categoriaID:"Espumantes", name:"Casa Bower", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/casa-bower.webp", stock:200},
    { id:22, categoriaID:"Espumantes", name:"Chandon", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/chandon.webp", stock:200},
    { id:23, categoriaID:"Espumantes", name:"Deseado Rose", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/deseado-rose.webp", stock:200},
    { id:24, categoriaID:"Espumantes", name:"Nieto Senetiner", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/nieto-senetiner.webp", stock:200},
    { id:25, categoriaID:"Espumantes", name:"Santa Julia", descripcion:"Espumante", precio:300, imagen: "/images/bebidas/espumantes/santa-julia.webp", stock:200},
    
    //Destilados
    { id:26, categoriaID:"Destilados", name:"Absolut", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/absolut.webp", stock:200},
    { id:27, categoriaID:"Destilados", name:"Gin Tanqueray", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/gin-tanqueray.webp", stock:200},
    { id:28, categoriaID:"Destilados", name:"Grey Goose", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/grey-goose.webp", stock:200},
    { id:29, categoriaID:"Destilados", name:"Skyy", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/skyy.webp", stock:200},
    { id:30, categoriaID:"Destilados", name:"Smirnoff", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/smirnoff.webp", stock:200},
    { id:31, categoriaID:"Destilados", name:"Whisky Jameson", descripcion:"Destilado", precio:600, imagen: "/images/bebidas/destilados/whisky-jameson.webp", stock:200},
    
    //Aperitivos
    { id:32, categoriaID:"Aperitivos", name:"Aperol", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/Aperol.webp", stock:200},
    { id:33, categoriaID:"Aperitivos", name:"Campari", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/campari.webp", stock:200},
    { id:34, categoriaID:"Aperitivos", name:"Cynar", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/cynar.webp", stock:200},
    { id:35, categoriaID:"Aperitivos", name:"Fernet Branca", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/fernet-branca.webp", stock:200},
    { id:36, categoriaID:"Aperitivos", name:"Gancia", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/gancia.webp", stock:200},
    { id:37, categoriaID:"Aperitivos", name:"Jagermeister", descripcion:"Aperitivo", precio:400, imagen: "/images/bebidas/aperitivos/jagermeister.webp", stock:200},
    
    //otros
    // { id:38, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:39, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:40, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:41, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:42, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:43, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:44, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:45, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:46, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:47, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:48, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:49, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:50, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},
    // { id:51, categoriaID:"", name:"", descripcion:"a", precio:, imagen: "/images/bebidas/", stock:200},



]   


export default productosList;