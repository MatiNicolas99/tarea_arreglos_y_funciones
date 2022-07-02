const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  
  //Variables principales
  const btn_busqueda = document.querySelector('#btn-busqueda');
  const btn_reinicio = document.querySelector("#btn-reiniciar");
  const contenedor = document.querySelector('.propiedades');
  let agrupador_propiedades = "";
  
  //Botón de busqueda de elementos
  btn_busqueda.addEventListener('click', () => {
    const cantidad_propiedades = document.querySelector('#cantidad').value;
    const valor_min = document.querySelector('#valor-min').value;
    const valor_max = document.querySelector('#valor-max').value;
    total = "";
  
    if (cantidad_propiedades == "" || valor_min == "" || valor_max == "" || cantidad_propiedades < 0 || valor_min < 0 || valor_max < 0) {
      alert("Faltan campos por completar");
    }else {
    for (let propiedad of propiedadesJSON) {
      if (propiedad.rooms <= cantidad_propiedades && propiedad.m >= valor_min && propiedad.m <= valor_max) {
        cargarDatos(propiedad);
        contenedor.innerHTML = agrupador_propiedades;
        total++; 
      }
    }
    document.querySelector("#total").innerHTML = `Total: ${total}`;
    agrupador_propiedades = "";
  }});
  
    //Botón de reinicio de elementos para mostrarlos todos
 btn_reinicio.addEventListener("click", () => {
  for (let propiedad of propiedadesJSON) {
    cargarDatos(propiedad);
    contenedor.innerHTML = agrupador_propiedades;
    document.querySelector("#total").innerHTML = `Total: ${propiedadesJSON.length}`;
    document.querySelector("#cantidad").value = "";
    document.querySelector("#valor-min").value = "";
    document.querySelector("#valor-max").value = "";
  }
  agrupador_propiedades="";
});

  //Función que carga los datos del arreglo de objetos
  const cargarDatos = (propiedad) => {
    agrupador_propiedades +=
  
      `<div class="propiedad">
            <div class="img" style="background-image: url('${propiedad.src}')"></div>
            <section>
              <h5>${propiedad.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${propiedad.rooms}</p>
                  <p>Metros: ${propiedad.m}</p>
              </div>
              <p class="my-3">${propiedad.description}</p>
              <button class="btn btn-info ">Ver más</button>
          </section>
      </div>`;
  }

    //Funcion que carga los datos al iniciar la página
    window.onload = () => {
      for (let propiedad of propiedadesJSON) {
        cargarDatos(propiedad);
        contenedor.innerHTML = agrupador_propiedades;
        document.querySelector("#total").innerHTML = `Total: ${propiedadesJSON.length}`;
      }
      agrupador_propiedades = "";
    };
  