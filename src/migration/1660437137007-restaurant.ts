import { MigrationInterface, QueryRunner } from "typeorm";

export class restaurant1660437137007 implements MigrationInterface {
  name = "restaurant1660437137007";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "restaurants"`);
  }
}
