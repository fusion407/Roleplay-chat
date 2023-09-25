# Roleplay Chat

![Screenshot 2023-08-26 124523](https://github.com/fusion407/Roleplay-chat/assets/61926486/5e1fe15d-63dd-421e-aedf-77a5abe3f03b)

## Description

This is my final capstone project for Flatiron School that earned my certificate in Software Engineering.

In this applications, users may sign up and login to an account, join and create new campaigns which serve as chatrooms for other users to join and narrate RPG themed fantasy stories.

## Usage
The following are required:

Ruby 2.7.4, NodeJS (v16), Postgresql.

Ruby can be installed with following command:

```
$ rvm install 2.7.4 --default
```

Install latest version of bundler and rails:

```
$ gem install bundler

$ gem install rails
```

Install NodeJS:

```
$ npm i -g npm
```

Install Postgres:

```
$ sudo apt update

$ sudo apt install postgresql postgresql-contrib libpq-dev
```

Run Postgres service:

```
$ sudo service postgresql start
```

Creating database user so it can connect to rails:

First check operating system username:

```
$ whoami
```

You must use the same name to create Postgres user:

```
$ sudo -u postgres -i

$ createuser -sr <username>
```

Clone this repository and run rails server and react application:

```
$ rails s

$ npm start --prefix client
```
