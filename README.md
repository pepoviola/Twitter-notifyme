# Twiiter-notifyME #

## Twitter notifications for desktop ##

 node.js wrapper to dbus notifications, only works under linux enviroment 
 Because twitter only allow oAuth clients apps you have to create your app
 first, and complete the oauth fields.

 Ones you have this launch the app and every 15 seconds, remember twitter limit
 for consume timeline API is 360/hour, this app look for new tweets and you in
 your desktop via dbus system.


Run:
 
 You can launch like this, to run in background:
 $ node app.js >> /tmp/app.log 2>&1 &
 
