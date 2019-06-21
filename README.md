# Title: CRMmvc.com

## Table of contents
* [Project](#project)
* [Demo](#demo)
* [Balsamiq Mock Ups](#mock-ups)
* [About The Author](#about)
* [General info](#general-info)
* [Navigation explained](#navigation)
* [Technologies](#technologies)
* [Resources](#resources)
* [Features](#features)
* [Testing](#testing)
* [Credits](#credits)

## Project:
This project represents a design styled to look like an early stage MVP prototype. It's design is  purposely purposely dummied down to and intentionally lacks flare as most prototypes of its kind would. It will serve as a working model for a software application development company specializing in the design and creation of cloud based CRM prototypes for small to medium businesses (SME's).

## Demo
A live demo can be found [here](https://jmcclain0129.github.io/CRMmvc/index.html).

![Desktop Demo](https://github.com/Jmcclain0129/CRMmvc/blob/master/CRMmvc-index.png?raw=true "Desktop Demo")

## Balsamiq Mock-Ups Address:
http://www.evernote.com/l/APD6Mvvxh15I04LaFHudaxg1UTovmEJ5ssU/

## About the author and project developer

Hello,

My name is John McClain.

I recently formed my own company and secured the domain name CRMmvc.com. I plan on using this milestone project as a landing page and sales funnel for my new business.

My background includes many years experience selling software application development projects, primarily SaaS solutions to SME's. It is this experience that has sparked my interest in developing a business model that specialises in the development low cost functioning prototypes that are essentially cloud based web applications serving as a companies MVP.

## General info

This project is a simple MVP (minimum viable product) designed to showcase what an MVP might look like if my company were to design one for a customer of ours. The principle is to focus on delivering functionality rather than design in the earliest stages of development so that you can get to market faster and present the product to early adopters in the hopes of gaining feedback as it relates to the navigation and useability of the site.

The projects user journey is designed to influence them into downloading an icon on their desktop and/or device homescreen so that when they wish to visit the site in the future they can launch it from clicking or tapping the icon rather than keying in the addrees in a browser.

Because this project is based on an MVP approach the traditional design elements and decoration of text elements buttons, borders and so on have not been the focus of what I intended to achieve by developing this early stage prototype.

The focus of the project is to impress upon visitors to the site that our company specialises in developing early stage cloud based CRM [Customer Relationship Management] systems designed with MVC [Model View Controller] methodology to arrive at a phase 1 iteration that delivers the minimum amount of functionality to bring their project to market.

## Navigation explained. Functionality not functioning as intended also explained!

Since this is milestone project 1 as part of the user centric frontend developer module lessons I did not deem it necessary to ensure all of the desired functionality functioned as plan. There are several features in this MVP that are what would be considered beyond the technological scope of deliverables expected to be within the project 1 delivery package. As such I am inclined to explain some of the navigation short falls and include how I intend on including remedies in future iterations of this project

1. The index page

    - The index page and the pwa landing page have wordclouds images on them. The purpose of the wordcloud is really a marketing ploy. There is a profound statement embedded in the cloud to act as a sublimal message.

    - The idea is that the user who takes the time to actually read the word cloud will have better recall of the messaging within it because of the additional effort in concentration they expended to read it. I realise some may find it annoying and many may skip over it altogether but the hope is that the few who actually take the time to read it will find it amusing and perhaps even mention it in conversation which is a great way to break the ice with clients.
    
    - It also gives us a chance to temper our sales pitches in a way that expresses our unique development philosophy. After all, most development firms would not risk pitching the concept of developing an MVP before investing in a fullblown application.
    
    - Our philosophy is to devise a pathway for the client to introduce their product as early as possible so early adopters can provide valuable feedback related to the core functionality and navigation presented. This way we can use that knowledge to improve the features ad hoc before deciding to move on to decorating the site. This keeps the project budget down and in our opinion is the most agile approach to delivering a cost effective prototype that is suitable for the marketplace.

2. The click-here page
    - This page has a modal which contains an image of an app icon. On click of button from within the modal the download window should open and allow the user to proceed to download the app icon to the desktop homescreen or mobile device homescreen. I have not programmed the logic for this to take place but have added an url to the button which redirects the user to the page they would expect to land on if they had opened the app icon from their respective homescreen.

    - The project brief accompanies a pdf dock which houses the projects balsamiq mock-ups. The ux depicted in the mock-ups indicate the user should land on a success page notifying them they successfully downloaded the app icon with further instruction to go to their homescreen and click/tap the icon to launch the page.
    
    I have purposefully omitted this page from the milestone project site because I would have had to add additional feature within the page to get the user to the PWA landing page they are redirected to through the modal currently. Eventually I will add the download feature to the button and then introduce this success page to the project but not prior to submitting this milestone project.
	
## Technologies
Project is created with:

* HTML5
* CSS4
* Bootstrap 
* jquery-3.3.1.min.js

## Resources for inspiration aka = copy and paste ;-) "why reinvent the wheel?"
    /* Home Page */ https://getbootstrap.com/docs/4.3/examples/cover/
    /* Gallery Page */ https://startbootstrap.com/snippets/thumbnail-gallery/
    /* Word Cloud */ https://www.jasondavies.com/wordcloud/#%2F%2Fwww.jasondavies.com%2Fwordcloud%2Fabout%2F
    /* Word Cloud */ https://sites.google.com/site/scriptsexamples/custom-methods/other-libraries/word-cloud-library
    /* Word Cloud */ https://docs.google.com/document/d/1t7_gNhvOY4OvjbFHPPJtpzl2G3z2a2JV8P9jBpDNc-Q/edit
    /* Word Cloud */ https://chrome.google.com/webstore/detail/fun-text/pejklkkiknciokhehfcnpnhcgohjbpag
    /* Word Cloud */ https://docs.google.com/document/d/14rmheCFA6m1fTa6amsdwTngQITS1zDyJkYJ16jt8UbA/edit
    /* Word Cloud */ Creative cloud Photoshop App
    /* readme */ https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project
    /* bootstrap grids */ https://www.w3schools.com/bootstrap/bootstrap_templates.asp
    /* bootstrap grids */ https://uxplanet.org/how-the-bootstrap-4-grid-works-a1b04703a3b7
    /* bootstrap grids */ https://cssgrid-generator.netlify.com/
    /* websafe colors */ https://websafecolors.info/color-chart
    /* bootstrap PWA */ https://www.codica.com/blog/progressive-web-apps-vs-native/


## Features

The word cloud feature is simple image at the moment. I mentioned above I was using frames but have decided to convert the google docs generated cloud which is providing the frame into an image. To do so I took a screen snippet and pasted that in photoshop where I removed the background using the color select option. I then saved it as png and placed on site as needed.


The site the Modal screen to access app icon download option that allows user to palce short cut on their desk top back to the site. Currently the logic is javascript which is outside the parameters of this milestone. So the site is simulating the flow as if the user had downloaded the icon and lanched the site from it. The landing page would be different than the home page if you launched from descktop because it would load the PWA version of the site.

The footer is intentionally not fixed to the bottom of the page. To achive this I placed the footer in the main grid which has a min-width setting at 56 rem.

The { curly brackets } are intentially used as design elements at the top of each pages content area. The curly brackets wrap the page title using (p) element.

The Search fearture in the navbar section is not functioning feation. The elements are their as design features only at this milestone.

Buttons on the launch-your-pwa page are static. Eventually they will be used by the user to either close the open tab they are in or simply close all tabs. This is by design. The project is designed to get the user to load the PWA version of the site and to access the site in the future using the icon on the user homescreen rather than through a browsr

On the index and pwa-man page there is a jquery toggler feature. A div has title text matching the "case crm" and case pwa" title text seen in the script.js file. This div loads styled paragraph text on page load then the script version takes over once a button is actioned.

Future features

I intend to develop the site as a fully compliant PWA using googles PWA standards call-out
I intend on integrating 3rd party API that will enable the user to view his/her browsing history on the site.

## Testing

I manually testing all pages by clicking all link buttons. My git show extensive history of pushes fixing bugs as I found them then pushing changes to git. I also had my mentor and the class supervisor do walkthrough of the site and neither reported issues with navigation or responsiveness.

I used no external testing tools to test the project.

## Credits

Original theme developed by Mark Otto, Jacob Thornton, and Bootstrap contributors @ https://twitter.com/mdo

