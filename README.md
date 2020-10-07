# xAPI JS wrapper
[![Build Status](https://travis-ci.org/krybc/xapi-js-wrapper.svg?branch=master)](https://travis-ci.org/krybc/xapi-js-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/krybc/xapi-js-wrapper/badge.svg)](https://coveralls.io/github/krybc/xapi-js-wrapper)

xAPI wrapper for nodeJS environment based on websocket and written in Typescript.  
xAPI is a endpoint for xStation forex trading software distributed by one of the biggest polish trading brokers - XTB.

[xAPI documentation](http://developers.xstore.pro/documentation/current)  
[xStation website](https://www.xtb.com/en/trading-services/trading-platforms/xstation)

## Requirements
* NodeJS >= 8

## Installation

```bash
npm i --save @krybc/xapi-js-wrapper
```


## Usage

Every sync api command class and streaming command class has equal one response class that be returned as Promise (sync response) as Observable (streaming response), when response has been received.


### Connect to sync api

```js
import {Servers, SyncApiConnector} from 'xapi-js-wrapper';

const server = Servers.get('xtb', 'demo');

new SyncApiConnector(server).connect().then(conn => {
  
});
```

### Connect to streaming api

Streaming API commands is available only if you're logged in, because all streaming commands required `streamSessionId` value, that will be returned by sync `LoginCommand`.

```js
import {Servers, StreamingApiConnector} from 'xapi-js-wrapper';

const server = Servers.get('xtb', 'demo');

new StreamingApiConnector(server).connect().then(streamConn => {
  
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
