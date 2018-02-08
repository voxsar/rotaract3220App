# Rotaract 3220 District App [![Build Status](https://travis-ci.org/voxsar/rotaract3220App.svg?branch=master)](https://travis-ci.org/voxsar/rotaract3220App) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
The Rotaract 3220 App that is started during DRR Shakthi's Year (2015/16) and Continued during DRR Husni's year (2016/17), it has been continued as a pet project during the 2017/18.

Its goal is to provide the Rotaractors of the District with a two way communication tool and a hierarchical communication platform.
* Two Way Communication Tool
-- Two Way Communication Club and District
-- Two Way Communication Club and Club Members
- Virtual Version of the Membership Card
- District Calendar
- Club Calendar

It is primarly designed on HTML5 and PHP, It uses MySQL as the default data source with options for scalability
The server operates on apache/php stach overlayed with a json api platform

There are three major submodules within the repository
- Cordova Mobile Application Source
- Server Side and Data Layer Source

None of the technologies or development source is closed source or hidden for development, anyone can contribute to improving the current design

## Cordova Mobile Application

Currently the cordova application is coupled together with Framework7 which acts as the UI Framework overlay for the Cordova AP
 
We selected cordova as the core mobile platform due to app's workflow being able to be fullfilled with cordova's core technologies and also since it provides the ability to deploy to multiple mobile platforms easily, it makes the process of a large scale deployment quite easy.
 
Framework7 UI framework provides the look and feel of both the IOs and Andriod Material Design (as of 2018), which makes it an deployment in terms of UI as very easy task.
 
 Although Cordova is a limited platform compared to native development, the app workflow is within the boundary of cordova's limitations
 
 ### Mobile Features In Development
 - Multiplatform Deployment
 - Edit/View Personnel Details
 - Club Details/Updates
 - Club Projects
 - Rotaract Projects
 - District Projects
 - Cluster Projects
 - Alerts
 
 ### Installation and Running
 
 First download or clone this entire repo or if you only want the mobile app then rotaract mobile app folder
 
 `
 git clone https://github.com/voxsar/rotaract3220App.git
 `
 
 Ensure that you have NPM Installed before running these applications and Cordova as well
 To run the mobile application in a V8 Browser (debug testing)
 
 `
 cordova run browser
 `
 
 If you want to perform continous updates and reflect changes use the live reload option (uses a cordova plugin)
 
 `
 cordova run browser -- --live-reload
 `
 
 Note that once the live reload is run, the command line will not stop running and showing updates of changed files
 
 To add new platforms to the build you must use the add platform command, currently the android platform is operational
 `
 cordova add platform android
 `
 
 ## Web Server
 The web server will host the the central commucation hub for all platforms mobile and handle requests from District and Club Coordinates specfic calls and client side calls, alerts etc
 It will also maintain the system logs for all the applicaition calls
 
 There is no command line commands to run this, simply copy the server into the apache public html folder and connect the database by config.php to a stable MySQL server
 
 ### Server API
JSON API is how the application communicates information between the server and mobile application
