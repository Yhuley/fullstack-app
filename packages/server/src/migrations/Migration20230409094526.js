'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20230409094526 extends Migration {

  async up() {
    this.addSql('create table "user" ("id" uuid not null, "email" varchar(255) not null, "name" varchar(255) not null, "password" varchar(255) not null, constraint "user_pkey" primary key ("id"));');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

  async down() {
    this.addSql('drop table if exists "user" cascade;');
  }

}
exports.Migration20230409094526 = Migration20230409094526;
