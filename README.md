# xAPI JS wrapper

xAPI wrapper for nodeJS environment based on websocket and writed in Typescript.

http://developers.xstore.pro/documentation/current

## Requirements
* NodeJS >= 8

## Installation

```bash
npm i --save xapi-js-wrapper
```


## Usage

### Connect as Promise
```js
import {Servers, SyncApiConnector} from 'xapi-js-wrapper';

const server = Servers.get('xtb', 'demo');

const conn = new SyncApiConnector(server).connect().then(result => {
  
});
```

### Login

```js
const credentials = new Credentials(process.env.XAPI_LOGIN, process.env.XAPI_PASSWORD);
const result = conn.executeCommand(new LoginCommand(credentials)).then(result => {
  const sessionId = result.streamSessionId;
});
```

## Test

You must first enter the login and password variables in package.json
Then you need to enter command:

```bash
npm run test
```
