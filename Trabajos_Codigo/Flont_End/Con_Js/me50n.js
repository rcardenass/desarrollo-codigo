let Centros = [
    {
      "CodigoCentro": "1",
      "NombreCentro": "Lima"
    },
    {
      "CodigoCentro": "2",
      "NombreCentro": "Arequipa"
    },
    {
      "CodigoCentro": "3",
      "NombreCentro": "Cajamarca"
    },
    {
      "CodigoCentro": "4",
      "NombreCentro": "Huancayo"
    },
    {
      "CodigoCentro": "5",
      "NombreCentro": "Cusco"
    },
    {
      "CodigoCentro": "6",
      "NombreCentro": "Tacna"
    },
    {
      "CodigoCentro": "7",
      "NombreCentro": "Tumbes"
    },
    {
      "CodigoCentro": "8",
      "NombreCentro": "Iquitos"
    },
    {
      "CodigoCentro": "9",
      "NombreCentro": "Puno"
    },
    {
      "CodigoCentro": "10",
      "NombreCentro": "Apurimac"
    }
  ];

  let Almacenes = [
    {
      "CodigoAlmacen": "1",
      "CodigoCentro": 1,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "2",
      "CodigoCentro": 2,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "3",
      "CodigoCentro": 3,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "4",
      "CodigoCentro": 4,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "5",
      "CodigoCentro": 5,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "6",
      "CodigoCentro": 6,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "7",
      "CodigoCentro": 7,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "8",
      "CodigoCentro": 8,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "9",
      "CodigoCentro": 9,
      "NombreAlmacen": "Almacen Principal"
    },
    {
      "CodigoAlmacen": "10",
      "CodigoCentro": 10,
      "NombreAlmacen": "Almacen Principal"
    }
  ]



  let centro = document.getElementById("centro");
  let almacen = document.getElementById("almacen");

  const PoblarCentro = () => {
    Centros.forEach((row) => {
      let option = document.createElement("option");
      option.innerText = row.NombreCentro;
      option.value = row.CodigoCentro;
      centro.appendChild(option);
    })
  }

  const PoblarAlmacen = (CodigoCentro) => {
    if(CodigoCentro === 0){
      almacen.innerHTML = "<option value='0'>-Seleccione Almacen</option>";
      return;
    }

    almacen.innerHTML = "";
    almacen.innerHTML = "<option value='0'>Seleccione Almacen</option>";

    let objAlmacen = Almacenes.filter((row) => {
      if(row.CodigoCentro === CodigoCentro){
        return row;
      }
    });

    objAlmacen.forEach((row) => {
      let option = document.createElement("option");
      option.innerText = row.NombreAlmacen;
      option.value = row.CodigoAlmacen;
      almacen.appendChild(option);
    })

    let option = document.createElement("option");
    option.innerText = "Todos";
    option.value = "-1";
    almacen.appendChild(option);
  }


  PoblarCentro();

  centro.onchange = (e) => {
    let CodigoCentro = +centro.value;
    PoblarAlmacen(CodigoCentro);
  }

