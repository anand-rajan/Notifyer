# Notifyers
Displays genral notification, warning, error or success message.

How To Use This Widget?

TO SHOW:
Syntax:
    systemNotifyer.display({
											type:'error | warning | success',
											text:'',
											html: ''
										})
  Example:
    systemNotifyer.display({type:"success",text:"Data saved successfully"});
                          or
    systemNotifyer.display({type:"success",html:"Data saved <em>successfully</em>"});

TO HIDE:
Syntax:
    systemNotifyer.destroy();
    
  
