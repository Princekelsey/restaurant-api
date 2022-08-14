## Setting Up

clone or download repository <br>
cd into src and
copy configuration files and enter your secret information: <br>

###

    cd src
    cp data-source-config.ts data-source.ts

## Steps to run this project:

In the project root directory, you can run the following command

1. Run `yarn install` command to install all dependencies.
2. Run `yarn migration:up` command to run database migration to setup the database schema.
3. Run `yarn seed` command to seed 100 mock data.
4. Run `yarn dev` command to start the server.
