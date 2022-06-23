type IAnyObject = Record<string, any>

enum Method {
    OPTIONS = "OPTIONS",
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    TRACE = "TRACE",
    CONNECT = "CONNECT"
}

export abstract class Client { 
    abstract request(method: Method, url: string, header: IAnyObject, data: IAnyObject): Promise<any | void>;
}

export class WeChatMiniAPPClient extends Client {
    constructor() {
        super();
    }

    request(method: Method, url: string, header: IAnyObject, data: IAnyObject) {
        return new Promise((resolve, reject) => {
            // https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
            wx.request({
                header,
                method,
                url,
                data,
                success(res) {
                    resolve(res)
                },
                fail() {
                    reject()
                },
                complete() {

                }
            })
        });
    }
}

