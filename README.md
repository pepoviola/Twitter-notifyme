# Twiiter-notifyME #

## Twitter notifications for desktop ##

 node.js wrapper to dbus notifications, only works under linux enviroment 
 Because twitter only allow oAuth clients apps you have to create your app
 first, and complete the oauth fields.

 Ones you have this launch the app and every 15 seconds, remember twitter limit
 for consume timeline API is 360/hour, this app look for new tweets and you in
 your desktop via dbus system.

### Steps for create twitter app: ###

  [twitter dev]:"https://dev.twitter.com/apps"
  login in [twitter dev]
 
  * Create new app
 
  * Complete Name, Description and website fields, agree with the devs rules and complete the capcha
  
  * One you created your app, go to the bottom of the page and create your tokens

### Steps to config ###
  Edit app.js and complete the filds for oAuth with your twitter info.


### Run: ###
 
 You can launch like this, to run in background:
 
 	$ node app.js >> /tmp/app.log 2>&1 &
 


By Pepo

Twitter: @pepoviola

mail: pepoviola at gmail dot com

