/*
*toggle on index
*/
  
  $('button').click(function(){
    let item= $(this).attr('id');
   
    createCard(item);
   })
  
function createCard(attr) {
     let header,body
     switch (attr) {
  
       case 'mvc':
         header= "MVC: Model view controller";
         body = "Model-View-Controller is an architectural pattern commonly used for developing user interfaces that divides an application into three interconnected parts.";
         break;
       case 'crm':
         header = "CRM: Customer Relationship Manager";
         body = "A CRM system helps companies stay connected to customers, streamline processes and improve profitabilityt";
         break;
       case 'mvp':
         header= "MVP: Minimum Viable Product";
         body = "A Minimum Viable Product or MVP is a product with just enough features to satisfy early customers, and to provide feedback for future product development.";
         break;
       case 'pwa':
         header= "PWA: Progressive Web App";
         body = "Progressive Web Applications load like regular web pages or websites but can offer the user functionality such as working offline, push notifications and device hardware access traditionally available only to native applications.";
         break;
       case 'offline':
         header= "PWA: Working Offline";
         body = "Save data in forms using your browser's memory. Google Chrome offers unlimited storage while Apple Safari is limited to 50mb but that will change soon enough. Ask for more details about this feature and how your company can benefit from it.";
         break;
        case 'pushes':
          header= "PWA: Push Notifications";
          body = "You can send notices via your web app to your customers who have the PWA app installed on their homescreens. Notices appear as alerts so those users who have alerts active receive the message on their screen. This works on PC, tablets and mobile devices. The red badge with number of notices also appears so the user knows how many messages are queued";
          break;
        case 'access':
            header= "PWA: Device Access";
            body = "Progressive Web Applications can access many features native apps can such as touch gesture, motion sensing and so on... Android has a much broader range of access than Apple but Apple is not far behind. The reality is this technology is built to compete against native mobile apps and anyone wishing to stay ahead of the curve needs to consider deploying a PWA as an alternative to investing in or maintaining native mobile apps.";
            break;

     }
     
     let tex= `<h3> ${header} </h3> <p>${body}</p>`;
     $('.card').html(tex);
   }
   