/***
Author: Anandharajan
***/
(function (){
  
  function Notifyer(){  } /*Constructor*/
  
  Notifyer.prototype.display = function (properties/*object*/){
    /*****
      Allowed 'properties' object param => {
											type:'error | warning | success',
											text:'',
											html: ''
										}
    *****/
	
	if(document.querySelector("#notifier_overlay")){
		this.destroy(); //destroy if notifier already exist.
	}
    
    var notificationTypes=['error', 'warning', 'success'],
		_type = (properties.type && notificationTypes.indexOf(properties.type.toLowerCase())> -1)? properties.type.toLowerCase() : "Notification",
        _text = properties.text || "",
        _html = properties.html || "",
        _dom = null,
        _txtOrHtml = _text? _text : _html;
		
		switch(_type){//iconType values are css classes for respective icons: using image sprite.
			case 'error':
				iconType = "_error";
				break;
			case 'success':
				iconType = "_success";
				break;
			case 'warning':
				iconType = "_warning";
				break;
			default:
				iconType = "_default";
		}
    
    _dom = "<div id='notifier_overlay' style=''><div id='notifier_wrapper' style=''><div class='notifier_header'><span class='icon_ "+iconType+"'></span><span id='notifier_title'>"+_type+"</span><span id='close_notifier_icon'>&#10006;</span></div><div id='notifier_content'>"+_txtOrHtml+"</div></div></div>"
    
    document.body.insertAdjacentHTML('afterbegin',_dom);
	
	this.closeIcon = document.getElementById("close_notifier_icon");
    
    //init events
    this.initListeners();
    
  };
  
  Notifyer.prototype.destroy = function (eve){
	if(arguments.length==0 || eve.type == "click" || (eve.type == "keypress" && eve.keyCode == 27)){
		var notifierNode = document.getElementById("notifier_overlay");
		document.body.removeChild(notifierNode);
	}	
  }
  Notifyer.prototype.initListeners = function (){   
        this.closeIcon.addEventListener("click",this.destroy);
		document.body.addEventListener("keypress", this.destroy);
  }

   systemNotifyer = new Notifyer();
  
} ());