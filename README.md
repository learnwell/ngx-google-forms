# ngx-google-forms

This workspace houses a collection of UI libraries with components that look, feel & behave like google forms so that your users can enjoy a familiar experience in the apps you build.

## Development

There is a wealth of information on how each milestone on our roadmap was accomplished from inception to completion. You can find it all in the nicely documented [closed issues](https://github.com/learnwell/ngx-google-forms/pulls?q=is%3Apr+is%3Aclosed).

Treat them as "How Tos" and make sure to search them for what you may need code-wise or process-wise.

### Dynamic

To actively develop the UI library while testin its look & feel in the tester application:

1. Build the UI libary and watch it for any changes to trigger automatic rebuilds:

    ```
    ng build checkbox-mcq --watch
    ```
1. Build the tester application and serve it:

    ```
    ng build google-forms-tester --prod && \
      ng serve google-forms-tester
    ```
1. Open `http://localhost:4200` on your local browser.

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
