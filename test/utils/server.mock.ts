import {Server} from "../../src/connector";

export const serverMock = new Server('ws://localhost:8111', 'ws://localhost:8222', 'mock server');
