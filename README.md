# Intro a Sequelize con SQLite

Este es un repositorio de ejemplo como introduccion a Sequelize con SQLite

## Comandos

Para inicializar un proyecto con sequelize utilizamos el comando:

```
npx sequelize-cli init
```

este comando creará dentro de la carpeta donde lo ejecute 4 directorios

- config
- migrations
- models
- seeders

La configuracion de la base de datos según el ambiente la realizaremos en el archivo **config.json** que se encuentra dentro de la carpeta config que creada anteriormente.

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "db/data/data.sqlite",
    "dialect": "sqlite"
  },
.....
```

Al estar trabajando con sqlite cambiamos el dialect por sqlite y en el atributo host colocamos un path apuntando a un archivo. En nuestro caso dentro de la carpeta db creamos una subcarpeta data

```
db
 - data
    data.sqlite
```

## Generar un nuevo modelo

Para generar un nuevo modelo

```
npx sequelize-cli model:generate --name User --attributes "userName:string, password:string"
```

## Para sincronizar los modelos con la base de datos.

```
db.sequelize.sync({force:true})
```
