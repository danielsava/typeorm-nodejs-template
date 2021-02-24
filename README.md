# Projeto Template TypeORM

Projeto de referência para TypeORM.



### TypeORM CLI : Observação

O TypeORM CLI gera, por padrão, arquivos `javascript`, por esse motivo para os projetos que utilizam `Typescript`, utilizar o script `typeorm` criando dentro do arquivo `package.json`. Recomendação da documentação oficial do TypeORM sobre o [TypeORM CLI](https://typeorm.io/#/using-cli).  


<br/>
## Migration

obs: Todos os exemplos utilizam o script `typeorm` criado no `package.json`  

Abaixo, o comando irpa criar uma `migrations` para criar a entidade `Class`(Disciplina) do nosso modelo de entidades:

    $ npm run typeorm migration:create -- -n createClass -d src/database/migrations

obs: sem o parâmetro `-d <dir_migrations>` o script gera um erro, mesmo com os diretórios da migrations configurado no `ormconfig.json`. 

<br/>
### Migration: ciclo de vida

Criados os arquivos de `migration`, o TypeORM CLI possui alguns comandos do ciclo de vida das migrations:

    # Run
    npm run typeorm migration:run

    # Show
    npm run typeorm migration:show

    # Revert
    npm run typeorm migration:revert

    # Query: através do cli é possível executar pesquisas na base de dados
    npm run typeorm query "SELECT * FROM <tabela>"

<br/>

## Entidades

obs: Todos os exemplos utilizam o script `typeorm` criado no `package.json`.

Para criar uma nova entidade pelo cli:

    $ npx typeorm entity:create -n Funcionario