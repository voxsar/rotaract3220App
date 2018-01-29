# rotaract3220App
The Rotaract 3220 App that is started during DRR Shakthi's Year (2015/16) and Continued during DRR Husni's year (2016/17), it has been continued as a pet project during the 2017/18 # Rotaract 3220 District App
Its goal is to provide the Rotaractors of the District with a two way communication tool and hierarchical communication platform
- Two Way Communication Tool
-- Two Way Communication Club and District
-- Two Way Communication Club and Club Members
- Virtual Version of the Membership Card
- District Calendar
- Club Calendar

It is primarly designed on HTML5 and PHP, It uses MySQL as the default data source with options for scalability
The server operates on apache/php stach overlayed with a json api platform

There are three major submodules within the repository
- Cordova Mobile Application Source
- Electron Desktop Application Source
- Server Side and Data Layer Source

None of the technologies or development source is closed source or hidden for development, anyone can contribute to improving the current design

## Cordova Mobile Application

 Currently the cordova application is coupled together with Framework7 which acts as the UI Framework overlay for the Cordova AP
 
 We selected cordova as the core mobile platform due to app's workflow being able to be fullfilled with cordova's core technologies and also since it provides the ability to deploy to multiple mobile platforms easily, it makes the process of a large scale deployment quite easy
 
 Framework7 UI framework provides the look and feel of both the IOs and Andriod Material Design (as of 2018), which makes it an deployment in terms of UI as very easy task
 
 Although Cordova is a limited platform compared to native development, the app workflow is within the boundary of cordova's limitations
 
 ## Electron Desktop Mode
 
 This application is written on Electron.IO which uses the chrome V8 engine as the based of deloyment, initailly the development including the website as a desktop, but now the development has been further compartmentalized into Desktop and Web Server
 
 This allows the Electron Desktop App to act as the compliment to the Mobile App as both perform similar services, also the electron application deployment allows to target multiple pupular plateforms such as Windows, Mac, and Linux
 
 This application provides similar fucntionality to the mobile application and is targeted to hospitals, clinics with operational staff and is able to send large scale, bulk information and is designed to handling massive patient records
 
 - Development of Core Activity for Hospitals, Clinics
 - Admin and Communication Dashboard for MOH and similar institutions to communicate information
 - Development of Addtional Features such as an Data Visualization Dashboard
 
 ## Web Server
 
 The web server will host the SMS application and the central commucation hub for all platforms mobile, desktop and handle requests from MOH specfic calls and client side calls, alerts etc, it also provides the data visualization data and processing power
 
 It will also maintain the system logs for all the applicaition calls
 
 ### Future API
There is a definient requirement to change how the core server fucntions, and a converstion to a API call based system, allowing other developers and applications to tap into the MOH alert feed thereby solidifing the Web Server API into a standard communication platform for the future

# Goals

- Two way communication for rural devices, complete take over of the rural medical commucation channels
- Integration into the standard model of the medical communication structure
- To become a standard known sri lankan app
- To become recognized and respected communication model similar to amber alerts in developed countries

# Installation

The repo contains the Cordova Application and the Web System, Server and all the related componenets that is required to start a stable Relay Service Network

## Mobile Application Node

Following are simple guidelines on how the mobile application cordova platform sources can be built

```bash

```

## SMS Application Node

## Server Application
