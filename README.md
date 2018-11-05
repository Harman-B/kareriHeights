# User Reg(Sample Project)

## Getting Started

## Technology Stack and Installations you need

### 1. Nodejs

Instals node and npm command to your environment.
(Official Installation Page)[https://nodejs.org/en/download/package-manager/]

<details>
<summary>Current Versions</summary>
<pre><code>
$ npm -v
6.0.1
$ node -v
v10.10.0
</code></pre>
</details>


### 2. Angluar CLI

Install ng to your environment.

<pre><code>
npm install -g @angular/cli
</code></pre>

<details>
<summary>Current Version</summary>
<pre><code>
$ ng -v
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 6.0.1
Node: 8.9.3
OS: linux x64
Angular: 6.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.1
@angular-devkit/build-angular     0.6.1
@angular-devkit/build-optimizer   0.6.1
@angular-devkit/core              0.6.1
@angular-devkit/schematics        0.6.1
@ngtools/webpack                  6.0.1
@schematics/angular               0.6.1
@schematics/update                0.6.1
rxjs                              6.1.0
typescript                        2.7.2
webpack                           4.6.0
    

</code></pre>
</details>  

### 3. Mongo DB
Install Mongo DB client  

(Official Mongo shell installation)[https://docs.mongodb.com/manual/mongo/]

<details>
<summary>Troubleshoot</summary>
- Check basic server connectivity
<pre><code>
$ ping 35.200.164.78
PING 35.200.164.78 (35.200.164.78): 56 data bytes
64 bytes from 35.200.164.78: icmp_seq=0 ttl=59 time=98.844 ms
</code></pre>

- Check mongo server connectivity
<pre><code>
mongo 35.200.164.78 --verbose
MongoDB shell version v4.0.2
connecting to: mongodb://127.0.0.1:27017
2018-09-11T05:32:53.501+0000 D NETWORK  [js] creating new connection to:127.0.0.1:27017
2018-09-11T05:32:53.502+0000 D NETWORK  [js] connected to server 127.0.0.1:27017
2018-09-11T05:32:53.503+0000 D NETWORK  [js] connected connection!
MongoDB server version: 4.0.2

</code></pre>

- Connect to development mongo server
<pre><code>
$ mongo IP/kareriheights -u 3bu1 -p 1234567890 --authenticationDatabase DB
MongoDB shell version v4.0.2
connecting to: mongodb://35.200.164.78:27017/IP
MongoDB server version: 4.0.2
> use kareriheights
switched to db kareriheights

</code></pre>
</details>

### Credentials

<pre>
Server Ip: <Your IP>
Database: <your Collection Name>
User:  3bu1
Password: 1234567890
authenticationDatabase: <Your DB>
</pre>

## Running in Development Mode

Run `ng serve` for a dev server.  
This will launch a webserver. Changes made would be automatically deployed.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project.  
The build artifacts will be stored in the `dist/kareriheights` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Develoment guidelines

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


### Project Path in server

`/home/3bhu1/kh`


### 4. Express, Mongoose
Install express server, Mongoose and dependencies 

``` npm install --save express body-parser```

```npm install --save mongoose```
