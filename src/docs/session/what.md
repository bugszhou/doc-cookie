# Session是什么

Session就是我们通常所说的会话，在我们打开浏览器，第一次访问一个网站时，服务器就会创建一个Session对象，保存在服务器上。同时，服务器会把这个Session对象的ID以Cookie的形式，传递给浏览器，即存放在响应头的Set-Cookie中。浏览器后续的请求都会携带这个Session的ID。

Session有两种失效方式：

1. 当用户关闭浏览器(不是关闭网页或者标签页)后，这个Session就失效了，
2. 服务器主动将Session作废

