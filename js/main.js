const nombre = "Tadeo Aguirre";

const experiencia = [
  {
    lugar: "Silstech",
    periodo: "Enero 2022 - Enero 2023",
    descripción:
      "Silstech se dedica a la gestión y seguridad de unidades de transporte. Durante mi trabajo en Silstech, mis principales responsabilidades incluyeron la maquetación, diseño y programación de vistas y componentes para diversos proyectos, tanto en desarrollo frontend con Vue como en desarrollo mobile con React Native",
  },
];

const estudios = [
  {
    lugar: "Carlos A, Cassaffousth IPEM 247",
    periodo: "2012-2018",
    descripción: "Tecnico Maestro Mayor de Obras",
  },
];

const lenguajesActuales = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
];

const lenguajesAprendiendo = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
];

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name");
nombreDOM.innerText = nombre;

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`;
  document.getElementById("experiencia").appendChild(item);
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`;
  document.getElementById("estudios").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`;
  document.getElementById("lenguajes_actuales").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`;
  document.getElementById("lenguajes_aprendiendo").appendChild(item);
}

function printDiv(printable) {
  var printContents = document.getElementById(printable).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
