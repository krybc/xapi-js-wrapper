# xAPI JS wrapper
[![Build Status](https://travis-ci.org/krybc/xapi-js-wrapper.svg?branch=master)](https://travis-ci.org/krybc/xapi-js-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/krybc/xapi-js-wrapper/badge.svg)](https://coveralls.io/github/krybc/xapi-js-wrapper)

xAPI wrapper for nodeJS environment based on websocket and written in Typescript.  
xAPI is a endpoint for xStation forex trading software distributed by one of the biggest polish trading brokers - XTB.

[xAPI documentation](http://developers.xstore.pro/documentation/current)  
[xStation website](https://www.xtb.com/en/trading-services/trading-platforms/xstation)

## Requirements
* NodeJS >= 12


## Version xapi-js-wrapper vs xApi version

| xapi-js-wrapper | xAPI |  
|:--|:--|  
| 2.5.0 | 2.5.0.* |  

## Installation

```bash
npm i --save @krybc/xapi-js-wrapper
```


## Usage

Every sync api command class and streaming command class has equal one response class that be returned as Promise (sync response) as Observable (streaming response), when response has been received.


### Connect to sync api

```js
import {Servers, SyncApiConnector} from '@krybc/xapi-js-wrapper';

const server = Servers.get('xtb', 'demo');

new SyncApiConnector(server).connect().then(conn => {
  
});
```

### Connect to streaming api

Streaming API commands is available only if you're logged in, because all streaming commands required `streamSessionId` value, that will be returned by sync `LoginCommand`.

```js
import {Servers, StreamingApiConnector} from '@krybc/xapi-js-wrapper';

const server = Servers.get('xtb', 'demo');

new StreamingApiConnector(server).connect().then(streamConn => {
  
});
```

### Run streaming commands

#### GetCandles

```js
streamConn.subscribeCandles('EURUSD').subscribe((result: StreamingCandleResponse) => {
  
});
```

### Login

```js
const result = conn.executeCommand('username', 'password').then(result => {
  const sessionId = result.streamSessionId;
});
```

## Test

```bash
npm run test
```
