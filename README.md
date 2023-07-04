# Demo Server: Movies

A small Express server to make requests to a Postgres database on movies.

## Using Local Version
1. Create a DEVELOPMENT database that is hosted in the cloud (e.g. elephantSQL) or a local one if you want/know how to.
  1. There are scripts that you can use to populate the database in `/src/db/movies.sql`
2. Copy the `.env.template` file and rename it `.env`.
3. Assign the value of your DB instance URL to the `PGURL` env var (e.g. `PGURL="postgres://asdasd:oskwoASKSowo2zZ@surus.db.elephantsql.com/asdasd"`).
4. In your Terminal/CLI, run the commands:
```bash
npm ci
npm start
```

## A Deployed Version
https://demoservermovies-julesnuggy.b4a.run/

# How to Deploy to Back4App
1. FORK this repo (don't just clone it).
2. Create a PRODUCTION database that is hosted in the cloud (e.g. elephantSQL) - this must be separate from your DEVELOPMENT database.
3. Create an account on https://www.back4app.com.
4. Go to your account and select "Create New App".
5. Configure the repos that you want to allow Back4App access to (if you haven't already).
6. Find this app from the list of repos, and click "Select":
  1. Give the app a name.
  2. Select the branch that it should deploy (typically `main`) and source directory (keep it as the project root directory `./` unless your structure is different).
  3. Keep "Auto deploy" on.
  4. Add the env vars - this will be the `PGURL` env var, and the value for this should be to the PRODUCTION database URL.
7. Click "Create App".
8. It will take a few minutes to deploy. Once it is ready, you can click on the deployed domain URL displayed in the left hand menu.
