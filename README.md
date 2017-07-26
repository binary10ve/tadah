### Steps to install

### Prerequisite

* [Node ( > 6.10.2)](https://nodejs.org/en/)

* [json-server](https://github.com/typicode/json-server)

    ```sh
    npm install -g json-server
    ```

* [create-react-app](https://github.com/facebookincubator/create-react-app)

    ```sh
    npm install -g create-react-app
    ```


### Install App


```sh
npm install
```

### Run the App

```sh
npm start
```

From another tab execute below command to run the json server

```sh
json-server --watch db.json -p3001 --delay 500
```

### Run the Tests

```sh
npm test
```

### For test coverage (note extra `--` in the middle) to include a formatted coverage report :
```sh
npm test -- --coverage
```

