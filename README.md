# Test1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Objective of the app

The app is to design reach and visualize the data from a given database as user friendly as it should be. 
Therefore the app contains only one page, the list component where the data is listed, and the users can filter the listed data by typing letter, and give the ages  to find the gnomes whose data are listed.

## Elements of the app

The app uses: 
- infinite scroll library to list user friendly the more tna 1000 data of gnomes
- Service workes to let the app functionable if the connection is lost, which is set to reach images from the cache to improve the performance.

## Functions of the app

There are (still) 2 different search option:
 - a search by letters
 - a search by age, where the user can give 2 differn age, a minimum age and a maximum age, and the application will search and list the result between these two parameter.