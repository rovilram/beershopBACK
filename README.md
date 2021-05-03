# Sequelize install and connect

## 1) Instalamos sequelize vía npm con el siguiente comando

    ```
        npm install --save sequelize
    ```

## 2) Instalamos mysql con el siguiente comando

    ```
        npm install --save mysql2
    ```

## 3) Si usas otro muchach@, pues...

    ```
        npm install --save pg pg-hstore # Postgres
        npm install --save mariadb
        npm install --save sqlite3
        npm install --save tedious # Microsoft SQL Server
    ```

## 4) Requerimos ambos en el archivo que queramos. Yo tengo uno propio que he llamado server.

    ```
        const { Sequelize } = require('sequelize');
    ```

## 5) Creamos la config de la base de datos. 
- El primer argumento 'sequelize', es el nombre de la base de datos a la que queráis conectaos
- El segundo, el nombre de usuario, en mi caso root.
- El tercero, la contraseña, en mi caso igual que el nombre, root.
- Como último parámetro, pasamos el objeto que definirá el host, en este caso localhost, y qué usamos para conectarnos, en mi caso, mysql
(postgress, mariadb etc... en otros casos)

    ```
        const db = new Sequelize('sequelize', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql'

        });
    ```

Y exportamos el módulo para importarlo en nuestro archivo principal. En mi caso, app.js

## 6) En app.js, con el archivo server importado (la config de que tendrá la conexión) Realizamos la conexión en sí.

    ```
        const db = require('./server');


        const dbTest = async () => {

            try{
                await db.authenticate();
                console.log('database connected');

            }catch(error) {
                throw new Error(error);
            };

        };
        dbTest();
    ```

## 7) Por último, creamos una carpeta para los módelos, igual que en mongoose. Ahí le decímos cómo va a lucir los campos de los elementos de nuestras tablas. En el ejemplo que tengo yo, la tabla de usuarios tendrá lo siguiente:

    ```
        const User = db.define('User', {
        
            firstName: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.BOOLEAN
            },
        });
    ```
### Donde aquí tendremos tres campos, uno para el nombre, otro para el email y otro que sería un booleano. No sé si es muy práctico pero sólo era para el ejemplo.

> Respecto a las querys, en la documentación oficial vienen unas cuantas, pero igual con todo lo que tenemos encima, le echaré un vistazo estos días y actualizo el repo si eso. Igualmente os paso esto así para que al menos tengáis cómo conectar mysql con sequelize.
Un saludete cariños míos.





    


