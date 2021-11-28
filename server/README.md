# Adonis Server

## Setup
Manually clone the repo.

Create a database in your machine and set it on .env
Or
Rename .env.example to .env

and then run `npm install`.
### Must Do

Generate key for adonis
```js
adonis key:generate         //Generate secret key for the app
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

Run the following command to populate a few data into the database
```js
adonis seed
```

## Attention

In case of the following error: 
```
client does not support authentication protocol requested by server; consider upgrading MYSQL client
```

Open mysql workbench or client and execute one of the following codes:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

and after, flush it's privileges
```sql
flush privileges;
```

Another known error is, on Windows:
- O arquivo script.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema.
- The file script.ps1 cannot be loaded because script execution has been disabled on this system.

Do the following:
  - Execute PowerShell as admin, and execute this command
```
Set-ExecutionPolicy RemoteSigned
```
  - Press "A"
  - Try the installation again


### RUN SERVER

To start the service, use the following command:
```
adonis serve --dev
```