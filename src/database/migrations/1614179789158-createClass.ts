import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateClass1614179789158 implements MigrationInterface {

    /* Alteraçoes da nova versão. Neste caso, cria a tabela ´Class´ */
    public async up(queryRunner: QueryRunner): Promise<void> {

       await queryRunner.createTable(
           new Table({
               name: "class",
               columns: [
                   {
                     name: 'id',
                     type: 'uuid',
                     isPrimary: true,
                     generationStrategy: 'uuid',
                     default: 'uuid_generate_v4()'
                   },
                   {
                    name: 'name',
                    type: 'varchar'
                   },
                   {
                    name: 'duration',
                    type: 'integer'
                   },
                   {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                   },
                   {
                    name: 'updated_at',
                    type: 'timestamp'
                   }
               ]
           })
       ) 

    }

    /* É o revert que essa migration gerou. Portanto, o 'down' é o inverso do 'up' */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('class')
    }

}
