# Notifyers
Displays genral notification, warning, error or success message.

How To Use This Widget?  
  
TO SHOW:  
Syntax:  
   <dl>systemNotifyer.display({  
                    <dd>  type:'error | warning | success',  </dd>
                      <dd>text:'',  </dd>
                      <dd>html: ''  </dd>
                     })</dl>
   Example:  
```javascript
     systemNotifyer.display({type:"success",text:"Data saved successfully"});  
                                   or  
     systemNotifyer.display({type:"success",html:"Data saved <em>successfully</em>"});  
```
TO HIDE:  
Syntax:  
```javascript
     systemNotifyer.destroy();  
```
  
