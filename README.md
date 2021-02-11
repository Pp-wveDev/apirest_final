# apirest_final
Api rest creada para el exámen final de Ing Web

## API Inicial
El repositorio de Heroku con los archivos que entregué del exámen es: https://josediaz-apirest.herokuapp.com
Tras probarlo en casa:
 - Me he dado cuenta de que hice mal el modelo (en lugar de cuerpo al cuerpo, lo llamé headers ¿? Supongo que fueron los nervios). 
 
 Aun así, el cliente que realicé se comunica apropiadamente con esta API. Curiosamente, no me di cuenta del fallo hasta esta tarde. 
 
## API final
Tras trabajar sobre el proyecto, el enlace final es: 
https://josediaz-apirest-def.herokuapp.com/

Se han implementado todas las funciones pedidas. Los commits están hechos de forma individual, especificando que se añade en cada uno.

## Rutas
Las rutas son las siguientes:

- GET **/messages**: todos los mensajes.
- POST **/messages**: crea un nuevo mensaje.
- GET **/messages/_user_**: obtiene mensajes enviados o recibidos por user.
- GET **/messages/_user_/cabeceras**: obtiene la cabecera de los mensajes recibidos o enviados por user.
- PATCH **/messages/id/_mId_**: modifica el asunto del mensaje cuya id coincida con mId.
- DELETE **/messages/id/_mId_**: borra el mensaje cuya id coincida con mId.
- GET **/messages/conversacion/_user1_/_user2_**: devuelve las conversaciones entre user1 u user2.
- GET **/messages/noRespondidos/_user_/**: devuelve los mensajes que user no ha respondido.
- GET **/messages/contactos/_user_**: devuelve todos los contactos con los que user haya hablado

NOTA: al escribir esto me he dado cuenta de las últimas rutas estarían mejor al revés (especificar la variable user antes de especificar la acción). Para no complicar más las cosas lo voy a dejar como está.
