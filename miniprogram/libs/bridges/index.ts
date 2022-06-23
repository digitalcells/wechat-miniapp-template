import { Client, WeChatMiniAPPClient } from './request';

class RequestBridge {
    client?: Client

    getDefaultClient() {
        let _client = this.client;

        if (!_client) {
            _client = new WeChatMiniAPPClient();
            this.client = _client;
        }

        return _client;
    }
}

export const RequestBridgeInstance = new RequestBridge();