function request(req) {

    //解决301、302重定向问题
    req.followRedirect = false;
    //解决显示图片问题
    req.encoding = null;

    return new Promise((resolve, reject) => {
        require("request")(req, function (err, res) {

            if (err)
                reject(err);
            else {
                let body = res.body;

                let contentType = (res.headers["content-type"] || res.headers["Content-Type"] || "text/plain");
                contentType = contentType.toLowerCase();

                if (contentType.includes("text") || contentType.includes("json")) {
                    try {
                        body = body.toString();
                    } catch (err) {
                        //打印日志，忽略
                        console.error(err.message)
                    }
                }

                resolve({
                    //res为request模块的response对象
                    status: res.statusCode,
                    headers: res.headers,
                    body: body
                });
            }
        })
    })
}


module.exports = {request};