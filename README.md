# Title: CRMmvc.com

A software application development company specializing in early stage MVP projects for SME's


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## Full Disclosure; about the author and project developer

About the author: Hello, my name is John McClain. This project is based on a business model I have been contemplating for some time now. I recently formed my own company and secured the domain name MVCcrm.com. I have many years experience selling software application development projects, primarily SaaS solutions, to SME's. My experience has always been client facing and though I have been in production environments I have never actually taken the time to take courses which could teach me to physically code. I would consider myself an expert on user experience and am quite comfortable writing scope documents and designing wireframes. My knowledge gap is in understanding the true fundamentals of how code pulls everything together which is why I have eagerly jumped at the opportunity to take the Code Institute's full stack jr developer course.

My hope is that I can take the knowledge I have gained here along with the skills I already possess and find a job as a jr. project manager with a software development company or SME with in-house operations.

Full Disclosure: My project is not as polished as many of the others because I joined the class 5 days after they did. I believe one other person in the class also joined late but only by a couple of days whereas I missed the entire first week. This means I missed the induction week and all of the initial intel that comes with it. I feel like I have been thrown to the wolves but am not complaining because I love a challenge and I absolutely love the course work. I am in heaven really! However, with that said I am at a grave disadvantage and have skipped both of the practice projects found in the user centric module including "the whiskey project" and "the resume" project. I did get about halfway through "the whiskey project" before I made a command decision to skip forward to the user centric milestone project #1. I started my project officially on Friday the 14th of June. It is now the 17 of June and I have completed the initial project by in large.

I built the site in 3 days with little or know knowledge of coding other than what I have gained over the 9 days I have been in the course. I am hoping that given this situation some preferential treatment related to the scoring of grades can be taken into consideration when whomever decides to put pen to paper and officially grade my efforts.

I feel it is also worth mentioning that I have had zero help from my mentor and have not actually ever spoken to my mentor. I have utilized the slack app resource which is a brilliant tool and without their help I certainly would not have been able to get as far along as I have.

With all of that said, I would like to take this opportunity to thank everyone at the Code Institute and to convey to each and everyone of you that IMO you guys rock. The program rocks and I personally wish each and every one of you the greatest success. It's a real treat and your team deserves a great deal of praise for bringing it to life. Kudos to you all!



## General info

This project is a simple MVP (minimum viable product) designed to showcase what an MVP might look like if my company were to design one for a customer of ours. The principle is to focus on delivering functionality rather than design in the earliest stages of development so that you can get to market faster and present the product to early adopters in the hopes of gaining feedback as it relates to the navigation and useability of the site.

Because this project is based on an MVP approach the traditional design elements and decoration of text elements buttons, borders and so on have not been the focus of what I intended to achieve by developing this early stage prototype.

The focus of the project is to impress upon visitors to the site that our company specialises in developing early stage cloud based CRM [Customer Relationship Management] systems designed with MVC [Model View Controller] methodology to arrive at a phase 1 iteration that delivers the minimum amount of functionality to bring their project to market.

## Navigation explained. Functionality not functioning as intended also explained!

Since this is milestone project 1 as part of the user centric frontend developer module lessons I did not deem it necessary to ensure all of the desired functionality functioned as plan. There are several features in this MVP that are what would be considered beyond the technological scope of deliverables expected to be within the project 1 delivery package. As such I am inclined to explain some of the navigation short falls and include how I intend on including remedies in future iterations of this project

1. The index page

    - The index page has an iframe embedded with a wordcloud in it. My intention is to replace the iframe with a dynamic wordcloud in a future iteration. To be blunt, I simply did not have enough time to provide the proper solution and could have opted to just create a quick image depicting the message in place of the iFrame. However, I chose to intentially leave the iFrame as a placeholder for my future wordcloud so that I did not get lazy and at some stage would be forced to provide the proper solution instead of work-a-rounds like the iFrame being used at the moment or an image as I suggested. The purpose of the wordcloud is really a marketing ploy. There is a profound statement embedded in the cloud to act as a sublimal message.

    - The idea is that the user who takes the time to actually read the word cloud will have better recall of the messaging within it because of the additional effort in concentration they expended to read it. I realise some may find it annoying and many may skip over it altogether but the hope is that the few who actually take the time to read it will find it amusing and perhaps even mention it in conversation which is a great way to break the ice with clients. It also gives us a chance to temper our sales pitches in a way that expresses our unique development philosophy. After all, most development firms would not risk pitching the concept of developing an MVP before investing in a fullblown application. Our philosophy is to devise a pathway for the client to introduce their product as early as possible so early adopters can provide valuable feedback related to the core functionality and navigation presented. This way we can use that knowledge to improve the features ad hoc before deciding to move on to decorating the site. This keeps the projects budget down and in our opinion is the most agile approach to delivering a cost effective prototype that is suitable for the marketplace.

2. The click-here page
    - This page has a modal which contains an image of an app icon. On click of button from within the modal the download window should open and allow the user to proceed to download the app icon to the desktop homescreen or mobile device homescreen. I have not programmed the logic for this to take place but have added an url to the button which redirects the user to the page they would expect to land on if they had opened the app icon from their respective homescreen.
    - The project brief accompanies a pdf dock which houses the projects balsamiq mock-ups. The ux depicted in the mock-ups indivate the user should land on a success page notifying them they successfully downloaded the app icon with further instruction to go to their homescreen and clock/tap the icon to launch the page. I have purposefully omitted this page from the milestone project site because I would have had to add additional feature within the page to get the user to the PWA landing page they are redirected to through the modal currently. Eventually I will add the download feature to the button and then introduce this success page to the project but not prior to submitting the project initially.

3. Index page and pwa-man page
    - There is a glitch in the jquery toggler feature I have on both of these pages. In the div the title text font size is larger than in the cards controlled by the script. The div loads on page load then the script version takes over once a button is actioned. Tp resolve I have to target that div title font through css to adjust its size but have not been able to do so without blowing up the widget. Will continue to find a solution and push it once solved. 
	
## Technologies
Project is created with:
* HTML5
* CSS4
* Bootstrap 
* Javascript
* jquery-3.3.1.min.js
* iFrame (temporary use until permanent solution is discovered)

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
    /* bootstrap grids */ 
    /* bootstrap grids */
    /* bootstrap grids */
    /* bootstrap grids */
    /* bootstrap grids */
    /* bootstrap grids */

## How I accomplished certain things

The word cloud feature is simple image at the moment. I mentioned above I was using frames but have decided to convert the google docs generated cloud which is providing the frame into an image. To do so I took a screen snippet and pasted that in photoshop where I removed the background using the color select option. I then saved it as png and placed on site as needed.

## Setup
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```