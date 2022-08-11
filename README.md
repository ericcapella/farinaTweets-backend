# Farina Tweets - Backend

Farina Tweets es una aplicación web que te permite ver y analizar los últimos 100 tweets con el hastag #farina de esta semana.

## Acceso API

La api está alojada en los servidores ofrecidos por Heroku y la URL pública y accesible es https://farinatweets.herokuapp.com/. Si quisiera ser usada de manera local, los pasos a seguir para su instalación son los descritos a continuación.

### Instalación en local
En primer lugar debemos clonar el repositorio a nuestra máquina local usando:
```bash
git clone https://github.com/ericcapella/farinaTweets-backend.git
```

Una vez clonado el código, debemos instalar todas las dependencias con el comando:
```bash
npm install
```

Una vez hecho instalados todos los paquetes ya se puede levantar la aplicación mediante: 
```bash
npm start
```
Una vez hecho todo esto ya tendremos nuestra aplicación corriendo en https://localhost:3001.

## Descripción técnica
La aplicación es capaz de recibir peticiones HTTP (API REST), procesarlas y generar una respuesta adecuada para ellas. Esto se consigue gracias al framework **Express**.
Por otro lado, la aplicación se conecta y guarda los datos a una BBDD de MongoDB, a la cuál accederemos mediante el servicio cloud **Mongo Atlas**.


Todo esto se consigue trabajando bajo el paraguas del motor de ejecución **nodeJs**.

## Librerías
Las librerías usadas en la aplicación son:

| Liberia | Utilidad |
| ----------- | ----------- |
| Mongoose | Gestión de la base de datos |
| dotenv | Uso de variables de entorno |
| cors | Uso recursos tipo cross-origin |
| twitter-api-v2 | Hacer fetch a la API de Twitter |

Todas estas librerías han sido instaladas y gestionadas con el gestor de paquetes npm.

## Observaciones
La API de Twitter tiene varios niveles que limitan lo que se puede hacer (https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api). El nivel básico es el Essential, el cual permite acceder a los 100 últimos tweets **más recientes** de una búsqueda. Para acceder al archivo completo de esa búsqueda, haría falta acceso a niveles superiores, como Academic Research (https://developer.twitter.com/en/docs/twitter-api/tweets/search/introduction).
