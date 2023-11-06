const projects = [
  {
    name: 'Rent a car front-end',
    introduction: 'En la segunda fase del proyecto Ren a Car, se desarrolló el módulo View encargado de alojar la aplicación web y renderizar los datos gestionados por el servidor, incluyendo información sobre los automóviles, usuarios y reservas registradas. Además, el servidor se encarga de renderizar y validar los formularios que permiten a los clientes crear y editar registros antes de enviarlos.',
    repository: 'https://github.com/Javier104-dev/rent-a-car-frontend',
  },
  {
    name: 'Rent a car back-end',
    introduction: 'Servidor back-end especializado en la gestión y control de un negocio de alquiler de autos. El cliente podrá registrar automóviles, clientes y sus reservas alojándolas en una base de datos MySQL, así como el control de creación, relación y sincronización de tablas desde el lado del servidor.',
    repository: 'https://github.com/Javier104-dev/rent-a-car-backend',
  },
  {
    name: 'Proyecto 3 - Trailerflix',
    introduction: 'Enfocado en la creación de una base de datos, el uso de tablas intermedias y la carga de entidades mediante un archivo .sql. Se usó el lenguaje SQL para realizar consultas complejas y obtener información detallada de cada serie y película. Trailerflix es un servidor donde los clientes podrán encontrar toda la información sobre sus series, películas y documentales favoritos, se permiten hacer búsquedas por género, nombre, categorías.',
    repository: 'https://github.com/Javier104-dev/proyecto-3',
  },
  {
    name: 'Prueba de cookies y tokens',
    introduction: 'Proyecto prueba, primeros pasos en la creación de tokens usando jwt.io y su envío al cliente a través de cookies. El objetivo es ganar conocimiento sobre este método de autenticación y autorización en una aplicación web usando JWT como método de seguridad. El servidor es básico y no se conecta a ninguna base de datos externa, para las pruebas se usó un objeto que contiene los datos del cliente, como usuario, contraseña, si es administrador, etc.',
    repository: 'https://github.com/Javier104-dev/probando-cookies-y-tokens',
  },
  {
    name: 'Conectando con MySQL',
    introduction: 'Proyecto prueba para poder conectarse a una base de datos MySQL y poder registrar personas y sus direcciones, para lograrlo se usaron clases siguiendo el patrón de Arquitectura en Capas, inyector de dependencias, Sequelize y su método sync para crear las tablas desde el servidor.',
    repository: 'https://github.com/Javier104-dev/conectando-con-mysql',
  },
  {
    name: 'Proyecto-2, Muebleria',
    introduction: 'Creación de un servidor HTTP que se conecta a una base de datos MongoDB Cloud para el registro de muebles. Uno de los requisitos para crearlo era configurar, tanto el servidor y los endpoints, en una sola hoja JS, también posee filtros de búsqueda si el cliente lo requiere. Se usó MongoDB por su flexibilidad para guardar registros sin la necesidad de crear tablas complejas.',
    repository: 'https://github.com/Javier104-dev/proyecto-2',
  },
  {
    name: 'Pre-entrega - Proyecto 2, coches',
    introduction: 'Servidor que se comunica con MongoDB Cloud, una base de datos no relacional en la nube. Cuenta con todo lo necesario para que el cliente pueda interactuar con la base de datos, como abrir y cerrar la conexión cada vez que se use algún endpoint, el servidor también es capaz de detectar y trabajar con filtros de búsqueda si el usuario los incluye en la URL de su petición, aparte de otras peticiones como crear, eliminar y editar los registros de coches.',
    repository: 'https://github.com/Javier104-dev/pre-proyecto-2',
  },
  {
    name: 'Proyecto-1, Almacén',
    introduction: 'Creación de un servidor HTTP con arquitectura API RESTful, el servidor usa como base de datos un archivo JSON donde se registra la mercadería que se puede encontrar en un almacén. Posee endpoints que permite a los usuarios comunicarse con el servidor y realizar peticiones CRUD.',
    repository: 'https://github.com/Javier104-dev/proyecto-1',
  },
  {
    name: 'Club de clubes front-end',
    introduction: 'Segunda parte del Club de clubes, para completar el proyecto se diseño una web sencilla con formularios que sirven para poder interactuar con el servidor API RESTful creado anteriormente. Se creó una interfaz amigable para exponer todos los clubes registrados, con opciones para crear, eliminar y actualizarlos.',
    repository: 'https://github.com/Javier104-dev/crud-clubes-frontend',
  },
  {
    name: 'Api anime con React',
    introduction: 'Mi primer proyecto de front-end, tuve que crear una página web interactiva donde los usuarios pueden escribir palabras clave para buscar, ya sea un anime específico, una película o cualquier contenido relacionado. La página se comunica con una API REST externa bastante completa para poder funcionar y mostrar los resultados de búsqueda.',
    repository: 'https://github.com/Javier104-dev/api-anime-con-react',
  },
  {
    name: 'Club de clubes back-end',
    introduction: 'Mi primer proyecto backend consiste en la creación de un servidor web desarrollado en JavaScript que actúa como una API para interactuar con un archivo JSON. Los endpoints permiten realizar solicitudes HTTP como crear, obtener, actualizar y borrar los clubes que se encuentras registrados en el archivo JSON.',
    repository: 'https://github.com/Javier104-dev/crud-clubes-backend',
  },
  {
    name: 'Pokedex-API',
    introduction: 'Comunica con una API externa y crea tarjetas con cada pokémon existente, al seleccionar una se redireccionará a una tarjeta mas detallada donde se exponen todas las características del pokémon seleccionado. También posee un paginador con el cual se puede avanzar y cambiar los pokemones expuestos.',
    repository: 'https://github.com/Javier104-dev/pokedex-api',
  },
  {
    name: 'Casa de cambio',
    introduction: 'Proyecto básico de consulta a una API de cambio de divisas, permite consultar y listar los valores actuales o históricos de una moneda seleccionada en relación con otras monedas en el mundo.',
    repository: 'https://github.com/Javier104-dev/casa-de-cambio',
  },
  {
    name: 'Hotel Alura',
    introduction: 'Segundo programa creado usando Java. Gestiona el registro de huéspedes y sus reservas en un hotel ficticio, se conecta con una base de datos creada en MySQL y permite hacer peticiones CRUD (Crear, Leer, Actualizar y Eliminar).',
    repository: 'https://github.com/Javier104-dev/hotel-alura',
  },
  {
    name: 'Conversor de monedas',
    introduction: 'Primer programa creado usando lenguaje Java. Funciona con ventanas emergentes donde se puede colocar el monto y seleccionar el tipo de cambio que se desea para la conversión, no se usa ninguna API o consultas externas, todo se hace con datos cargados en el programa.',
    repository: 'https://github.com/Javier104-dev/conversor-de-monedas',
  },
  {
    name: 'Memotest',
    introduction: 'Juego de memotest, consta de 12 tarjetas de colores que los jugadores deben emparejar por turnos, posee un contador de intentos interno y un mensaje de victoria.',
    repository: 'https://github.com/Javier104-dev/juego-memotest',
  },
  {
    name: 'Simón dice',
    introduction: 'Juego creado con JavaScript, HTML y CSS. Recreación del clásico juego con 4 colores, posee un contador de rondas y una notificación para saber a quién le corresponde jugar.',
    repository: 'https://github.com/Javier104-dev/juego-simon-dice',
  },
  {
    name: 'Tienda geek',
    introduction: 'Proyecto front-end. Tienda eCommerce donde se pueden ver los productos disponibles a la venta separados por categorías, utiliza un back-end simulado usando JSON-server, que permite hacer peticiones CRUD (Crear, Leer, Actualizar y Eliminar).',
    repository: 'https://github.com/Javier104-dev/tienda-geek',
  },
  {
    name: 'Ahorcado',
    introduction: 'Juego del ahorcado creado usando canvas, tiene algunas palabras cargadas predeterminadamente, también tiene la opción para poder introducir nuevas si se desea. Siempre que el programa se inicie se selecciona una palabra aleatoria.',
    repository: 'https://github.com/Javier104-dev/ahorcado',
  },
  {
    name: 'Encriptador',
    introduction: 'Mi primer proyecto. Programa básico creado usando JavaScript, CSS y HTML, sustituye las vocales de cualquier texto que se introduzca, tiene algunas validaciones para evitar enviar textos vacíos, caracteres especiales y números, se creó para trabajar únicamente con texto.',
    repository: 'https://github.com/Javier104-dev/encriptado',
  },
];

export default projects;