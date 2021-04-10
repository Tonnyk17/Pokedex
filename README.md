# Pokedex
Encuentra a tu Pokemon favorito y elige tus movimientos favoritos :D

Este proyecto fue hecho usando la Api de pokemon (https://pokeapi.co/docs/v2) las tecnologias usadas fueron:
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Javascript</li>
    <li>React js</li>
    <li>React hooks</li>
    <li>Webpack</li>
    <li>Firebase</li>
    <li>Api REST</li>
  </ul>
  
<h2>Instrucciones para clonar proyecto:</h2>
  
Despues de copiar el repositorio en tu equipo se procede a instalar las dependencias del proyecto. Para instalarlas se utiliza el comando

    npm install

Despues de instalar las dependencias se procede a hacer una prueba de desarrollo, usando el comando

    npm run start

Ya asegurando que el proyecto está funcionando correctamente, se ejecuta el script de producción con el comando

    npm run build

Se actualiza el repositorio local usando

    git add .

Y se hace un commit

    git commit -m <comentario de commit>

Ya teniendo el repositorio local actualizado se procede a conectar al repositorio en la nube (Github), para hacerlo se utiliza

    git remote add origin <enlace del repositorio>

Para asegurarse que se haya creado el repositorio remoto, utiliza el comando

    git remote

Por ultimo se procede a hacer un pull (esto es como buena practica) seguido de un push, con los siguientes comandos

    git pull origin master

    git push origin master


<h2>Instrucciones para desplegar en Firebase</h2>

Despues de crear un nuevo proyecto en Firebase, se ejecuta el siguiente comando 

    npm install -g firebase-tools

Para acceder a Google

    firebase login 

ó 

    firebase login --interactive

Para iniciar el proyecto de Firebase, ejecuta el siguiente comando en el directorio raíz de tu app:


    firebase init

Elige la opcion de Hosting, despues elige la opcion "Use an existing project" eliges tu proyecto de firebase, despues se configura el proyecto de la siguiente forma:

    What do you want to use as your public directory? dist

    Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Y

    Set up automatic builds and deploys with GitHub? (y/N) N

<h3>Configuracion de Github actions</h3>

 En el directorio raiz de tu proyecto, crea una carpeta llamada ".github" dentro de esa carpeta crea otra carpeta llamada "workflows" por ultimo dentro de esa carpeta crea un archivo .yml (como sugerencia te recomiendo que lo llames deploy.yml) y por ultimo pega el siguiente codigo en el archivo deploy.yml

            name: Build and Deploy
        on: [push]
        jobs:
        build:
            name: Build
            runs-on: ubuntu-latest
            steps:
            - name: Checkout Repo
                uses: actions/checkout@master
            - name: Install Dependencies
                run: npm install
            - name: Build
                run: npm run build
            - name: Archive Production Artifact
                uses: actions/upload-artifact@master
                with:
                name: dist
                path: dist
        deploy:
            name: Deploy
            needs: build
            runs-on: ubuntu-latest
            steps:
            - name: Checkout Repo
                uses: actions/checkout@master
            - name: Download Artifact
                uses: actions/download-artifact@master
                with:
                name: dist
                path: dist
            - name: Deploy to Firebase
                uses: w9jds/firebase-action@master
                with:
                args: deploy --only hosting
                env:
                FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}


Para obtener el Token de autorizacion tienes que acceder a tu cuenta de Firebase usando el siguiente comando

    firebase login:ci

Una vez obtenido el Token, este se mostrara en la terminal que estes utilizando. Ve a la configuracion de tu repositorio en Github y añade el Token en la seccion "Secrets"

Por ultimo haces el commit que hara el despliegue del proyecto en Firebase, para hacerlo usar los comandos

    git add .

    git commit -m <comentario>

    git push origin master


Ahora ve a la seccion de Actions en tu repositorio de Github para asegurar que el despliegue se haga de manera correcta y una vez hecho, ve a tu proyecto de Firebase para entrar al enlace de tu proyecto.



    



