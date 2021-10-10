import {io as openSicket } from 'socket.io-client';
import { baseURL } from 'api/service.http';

class Socket {
	private io;
  
	constructor() {
	  this.io = openSicket(baseURL);
	}
	getIO = () => {
			if (!this.io) {
				throw new Error('Socket.io not intaialized');
			}
			return this.io;
		}
	disconnect = () => {
			if (!this.io) {
				throw new Error('Socket.io not intaialized');
			}
			this.io.disconnect();
		}
  }
  
export const socket = new Socket();
