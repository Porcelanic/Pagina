El presente proyecto es una página de venta de camisas a las cuales se les puede agregar estampados, dicha pagina fue hecha con Vite + React, junto a TypeScript y JavaScript.

La base de datos de este proyecto fue hecha en PostgreSQL y no está desplegada.

El propósito bajo el cual se creó este proyecto fue con el fin de aprender a programar tanto frontend como backend en el framework React, por lo que este proyecto está orientado a ser ejecutado de forma local y no sobre el internet. Aunque con algunos cambios y el despliegue del backend se podría desplegar esta página en la web, este no era el objetivo final del proyecto, por lo que no se realizó.

En caso de querer ejecutar el proyecto:
-Se debe contar con Node.js dentro del path de su maquina, pues React es un framework que requiere de Node.js para funcionar.

-Se recomienda instalar la versión 16 de PostgreSQL.

-Tras instalar PostgreSQL, dentro de la carpeta llamada 'backend' existe una carpeta llamada 'Postgres DB backup'. En esta carpeta se encontrará un respaldo de la base de datos que utiliza el programa, el cual se puede montar sin problemas en la versión indicada -anteriormente de PostgreSQL

-Se recomienda usar el editor de código 'Visual Studio Code'.
-Para ejecutar el backend de la página, se debe navegar a la carpeta llamada 'backend' y cambiar el config.js presente en tal carpeta y ajustar a los datos propios. Tras esto, se puede abrir una terminal y, estando en la carpeta 'backend', colocar los comandos 'npm i' y después de ejecutarse el anterior comando, colocar 'npm run dev'.

-Para ejecutar el frontend, solamente hay que abrir una terminal y, estando en la carpeta 'frontend', colocar los comandos 'npm i' y después de ejecutarse el anterior comando, colocar 'npm run dev'.
