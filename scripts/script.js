
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
     }
     
     let tex= `<h1> ${header} </h1> <p>${body}</p>`;
     $('.card').html(tex);
   }
   