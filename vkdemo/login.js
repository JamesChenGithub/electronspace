var http = require("http");

function loginWith(userid, roomid){


    
    

        var params = {
                    'appid' : const_sdkappid, 
                    'accounttype' : const_accountType,
                    'roomnum' : parseInt(roomid),
                    'identifier' : userid,
                    'pwd' : '123',
                    'privMap' : 255,
                    'expire_time' : 604800
                    };
        console.log(params);

        var jsonstr = stringify(params);
        var options = {
            hostname: 'sxb.qcloud.com',
            port: 80,
            path: '/sxb_dev/?svc=account&cmd=authPrivMap',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept-Encoding':'gzip'
                'Content-Length': 
            }
          };
        

        url = 'https://sxb.qcloud.com/sxb_dev/?svc=account&cmd=authPrivMap';
    

       
          var req = http.request(options, function(res) {
            console.log('Status: ' + res.statusCode);
            console.log('Headers: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (body) {
              console.log('Body: ' + body);
            });
          });
          req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
          });
          // write data to request body
          req.write('{"string": "Hello, World"}');
          req.end();
          
          
        
        
    }