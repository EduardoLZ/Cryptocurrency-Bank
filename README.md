# Cryptocurrency-Bank
Banco de Criptomonedas - Ingenieria del Conocimiento
<br><br />
Profesor: Gilberto Antonio Ramirez Flores
<br /><br />
Alumnos:
<br />
Lara Zarrabal Eduardo Javier
<br />
Ruiz Ávila Iliana
<br />
Balderas Trejo Alberto Eliezer
<br /><br />
URL de la Aplicacion: https://ingconocimiento-3015f.firebaseapp.com/
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/5758348415467520.png?alt=media&token=6cca3abe-6456-4556-a897-b23c7e47ff54)
<br /><br />

👽Registrar Nuevo Usuario
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/registro.png?alt=media&token=2519d4c2-4c87-4af5-b2aa-382e2ab69d95)
<br />
En esta sección podemos registrar un nuevo usuario al sistema y podemos visualizar los usuarios registrados visualizando la tabla de usuarios registrados.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/registrojs.png?alt=media&token=2332e6ad-e0f0-4265-a9f4-2433ad91c786)
<br />
Aqui se puede apreciar el codigo Javascript que obtiene los datos del formulario y los manda a la base de datos en firebase.


<br /><br />

📈 Realizar Operación
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/transaccion.png?alt=media&token=0d1e706e-df4a-493f-bf3a-b07e96f05e63)
<br />
En esta sección podemos realizar transacciones entre cuentas existentes utilizando la llave publica que cada usuario tiene,para una mayor seguridad de las transacciones, cada campo valida la existencia de las llaves que se utilizaran para realizar la transaccion, si todo esto es validado correctamente, aparecera el boton para finalizar la transaccion, si el sistema detecta una llave falsa, la transaccion no puede realizarse.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/transaccionjs.png?alt=media&token=73c44a3b-fc11-4010-a061-4b33546ef61d)
<br />
Aqui se puede apreciar el codigo Javascript que genera la encriptacion utilizando una variante de encriptacion cesar sumada con el metodo de encriptacion por partes.

<br /><br />

💵Consultar Saldo
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/consultarSaldo.png?alt=media&token=73ed9d41-a34b-4d22-87f6-8ed8be206267)
<br />
En esta sección podemos consultar saldo utilizando solamente la llave publica de cada cuenta.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/consultarSaldojs.png?alt=media&token=634816d1-59fa-4be2-8510-2e09cfecabfc)
<br />
Aqui se puede apreciar el codigo Javascript que recibe los datos del saldo de la cuenta a la que se va a consultar, en este caso se pide el saldo de las monedas de el usuario, este codigo es el mismo para los billetes del usuario.

<br /><br />

💲 Circulacion de billetes y monedas
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/Circulacion%20de%20billetes.png?alt=media&token=287daaf1-b3a5-49ac-8ec1-0429f4cd3e8a)
<br />
En esta sección podemos consultar saldo utilizando solamente la llave publica de cada cuenta.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/Circulacion%20de%20billetes2.png?alt=media&token=fef8effe-efdf-4d4f-94f7-50abe39f375e)
<br />
Aqui se puede apreciar el codigo Javascript que recibe los datos del saldo de la cuenta a la que se va a consultar, en este caso se pide el saldo de las monedas de el usuario, este codigo es el mismo para los billetes del usuario.

<br /><br />

💱 Registro de operaciones
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/registro%20de%20operaciones.png?alt=media&token=826efc38-7b03-4292-83cf-ea1eb3dd6fa6)
<br />
En esta sección podemos consultar las transacciones realizadas encriptadas.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/registro%20de%20operaciones2.png?alt=media&token=7526ce48-746b-4292-be39-08339b85da51)
<br />
Aqui se puede apreciar el codigo Javascript que recibe los datos del saldo de la cuenta a la que se va a consultar, en este caso se pide el saldo de las monedas de el usuario, este codigo es el mismo para los billetes del usuario.

<br /><br />

🔠 Decodificador
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/decodificador.png?alt=media&token=dcce0abb-17b6-40c1-82d0-8523e53e22ab)
<br />
En esta sección podemos desencriptar una transaccion y saber quien fue el emisor,receptor y la cantidad que se envio.
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/decodificador2.png?alt=media&token=e36a5614-e0d5-4fb3-a08f-620c395bc3bd)
<br />
Aqui se puede apreciar el codigo Javascript que usa los metodos para renderizar el HTML y descrifrar la transaccion.

<br /><br />

Estructura de Archivos
<br /><br />
![alt text](https://firebasestorage.googleapis.com/v0/b/ingconocimiento-3015f.appspot.com/o/estructura%20de%20archivos.png?alt=media&token=e6a30c0e-8b60-4db0-8c07-d41f1019daa4)
<br />
Asi es la estructura de archivos divididos por tipo de archivo.


<br /><br />



