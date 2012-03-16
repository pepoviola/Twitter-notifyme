var oauth = require('oauth');
var fs = require('fs');
var http = require('http-get');
var exec = require('child_process').exec;
var _twitterAPI = "https://api.twitter.com/";
var _twitterConsumerKey = "CONSUMER KEY";
var _twitterConsumerSecret = "CONSUMER SECRET";
var _oauthAccessToken = "YOUR ACCESS TOKEN";
var _oauthAccessTokenSecret = "YOUR SECRET TOKEN";

var consumer = new oauth.OAuth(
	"https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
	_twitterConsumerKey, _twitterConsumerSecret, "1.0A", "", "HMAC-SHA1"
);

var showNotify = function(pic,user,text){
	cmd = "python  -c \"import dbus; print dbus.Bus().call_blocking('org.freedesktop.Notifications','/org/freedesktop/Notifications','org.freedesktop.Notifications', 'Notify','susssasa{sv}i', ('twNotify',0,'"+pic+"','@"+user+"','"+text+"',{},{},5000))\"";
	exec(cmd,function (error, stdout, stderr){
		if(error){console.log("Error de ejec");}
	});
};
var last_tw = 111111111110; //if i put 0 twittergive error
var main  = function(){
	consumer.get("http://api.twitter.com/1/statuses/home_timeline.json?count=1&since_id="+last_tw, _oauthAccessToken, _oauthAccessTokenSecret,
	function(error,data,response){
	if(error){console.log(error);}
	else{	
		JSON.parse(data).forEach(function(item){
			//console.log(item);
			last_tw = item.id_str;
			//console.log(item.user.profile_image_url);
			//console.log(item.text);
			//check if a have the picture
			var text = item.text.replace(/"/g,'\\"');
			 text = item.text.replace(/'/g,'\\"');

			fs.stat('/tmp/twNotify-'+item.user.id+'.jpg', function(err,result){
				if(err){
					//have to download
					//console.log("tengo que descargarlo");
					var url = {url:item.user.profile_image_url};
					http.get(url,'/tmp/twNotify-'+item.user.id+'.jpg',function(err,result){
						if(err){
							console.log('ERR');
							//showNotify();
						}
						else{ console.log('saved!');//showNotify();}
									//console.log(result.file);
									showNotify(result.file,item.user.screen_name,text);
					}});
				}
				else{
					//console.log('te tengo');
					showNotify('/tmp/twNotify-'+item.user.id+'.jpg',item.user.screen_name,text);
					//showNotify();
				}
			});


		});
	}
	});
};

main();
setInterval(main,15 * 1000);



