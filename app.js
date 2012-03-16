var oauth = require('oauth');
var fs = require('fs');
var http = require('http-get');
var growl = require('growl');
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
	growl(text, { title: '@'+user, image: ' '+pic }); //the npm version is buggie so until they update be fix here.

};
var last_tw = 111111111110; //if i put 0 twittergive error
var main  = function(){
	consumer.get("http://api.twitter.com/1/statuses/home_timeline.json?count=1&since_id="+last_tw, _oauthAccessToken, _oauthAccessTokenSecret,
	function(error,data,response){
	if(error){console.log(error);}
	else{	
		JSON.parse(data).forEach(function(item){
			last_tw = item.id_str;
			var text = item.text.replace(/"/g,'\\"');
			 text = item.text.replace(/'/g,'\\"');

			fs.stat('/tmp/twNotify-'+item.user.id+'.jpg', function(err,result){
				if(err){
					//have to download
					var url = {url:item.user.profile_image_url};
					http.get(url,'/tmp/twNotify-'+item.user.id+'.jpg',function(err,result){
						if(err){
							console.log('ERR');
							//showNotify();
						}
						else{ 
									//console.log('saved!');
									showNotify(result.file,item.user.screen_name,text);
					}});
				}
				else{
					//console.log('te tengo');
					showNotify('/tmp/twNotify-'+item.user.id+'.jpg',item.user.screen_name,text);
				}
			});


		});
	}
	});
};

main();
setInterval(main,15 * 1000);



