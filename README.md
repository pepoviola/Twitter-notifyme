# Twiiter-NotifyME #

## Twitter notifications for desktop using node.js##

 node.js wrapper to tweets notifications, using growl or linnotify-bin 
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


### Install and Steps to config ###

  * Check for growl/libnotify-bin, for this please check [node-growl] README
  [node-growl]:"https://github.com/visionmedia/node-growl"
  
  * Ubuntu / Debian (Linux) :
		sudo apt-get install libnotify-bin
  
  * Fedora (Linux):
        sudo yum install libnotify libnotify-devel
  * Windows:
      Download and install [growl-windows]
   
      Download [growlnotify-win] - IMPORTANT : Unpack growlnotify to a folder that is present in your path!

  * Mac
      Download and install [growl] and [growlnotify]  (is in the extras folder)
[growl-windows]:"http://www.growlforwindows.com/gfw/default.aspx"
[growlnotify-win]:"http://www.growlforwindows.com/gfw/help/growlnotify.aspx"
[growl]:"http://growl.info/downloads"
[growlnotify]:"http://growl.info/downloads"
  * Install dependencies
	npm install .
  * Edit app.js and complete the filds for oAuth with your twitter info.


### Run: ###
 
 You can launch like this, to run in background:
 
 	$ node app.js >> /tmp/app.log 2>&1 &
 

### Note ###
 * of course you need node.js to run it 

 * Thanks to @dual3nigma (for test and the advices)

---


(The MIT License)

Copyright (c) 2012 Javier Viola <pepoviola@gmail.com> twitter: @pepoviola

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


