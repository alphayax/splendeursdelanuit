
// On declare les variables necessaire à notre effet
	var voletDroit=null;
// On definit notre effet
	function Move()
	{
		var style=voletDroit.style;
		var marginRight=parseInt(style.marginRight)+Move.step;
		if(marginRight<=Move.end)
		{
			style.marginRight=Move.end+"px";
			window.clearInterval(Move.timer);
		}
		else
		{
			style.marginRight=marginRight+"px";
		}
	}
	Move.value=0;
	Move.step=1;
	Move.timer=null;
	Move.fps=25;
	Move.duration=500;
	Move.start=250;
	Move.end=0;


function getBox(obj)
{
	var rectangle=new Array();
	rectangle.left=0;
	rectangle.top=0;
	if(obj.offsetParent)
	{
		rectangle.left=obj.offsetLeft;
		rectangle.top=obj.offsetTop;
		while(obj=obj.offsetParent)
		{
			rectangle.left+=obj.offsetLeft;
			rectangle.top+=obj.offsetTop;
		}
	}
	return rectangle;
}
function initMove(node)
{
	var style=node.style;
		style.marginRight=Move.start+"px";
		var interval=Move.fps/(1000/Move.duration);
		Move.step=(Move.end-Move.start)/interval;
	//	alert(Move.step);
	// On lance l'effet
		Move.timer=window.setInterval("Move()",interval);
}
function openMenu()
{
	var sousMenu=document.getElementById("voletGauche");
		sousMenu.style.visibility="hidden";
	var content=Menu.getContent(this.getAttribute("id"));
	if(content)
	{
		var box=getBox(this);
			sousMenu.style.left=box.left+"px";
			sousMenu.style.top=(box.top+this.offsetHeight)+"px";
			while(sousMenu.childNodes.length)
			{
				sousMenu.removeChild(sousMenu.childNodes[0]);
			}
			sousMenu.appendChild(content);
		sousMenu.parentNode.appendChild(sousMenu);
		sousMenu.style.visibility="visible";
	}
}
function loaded()
{
	// On cache le volet droit pour lui donner un ptit effet
		voletDroit=document.getElementById("voletDroit");
		voletDroit.style.visibility="hidden";
	// Entre temps, on fabrique notre menu flotant
		var sousMenu=document.getElementById("voletGauche");
			sousMenu.style.position="absolute";
			sousMenu.style.visibility="hidden";
		var menu=document.getElementById("menu");
			var maxi=menu.childNodes.length;
			for(var i=0;i<maxi;i++)
			{
				menu.childNodes[i].onmouseover=openMenu;
			}
	/*
	// On recupere la taille du volet droit une fois celui-ci posé
		var width=parseInt(voletDroit.offsetWidth);
		var height=parseInt(voletDroit.offsetHeight);
		var paddingLeft=parseInt(voletDroit.style.paddingLeft) || 0;
		var paddingRight=parseInt(voletDroit.style.paddingRight) || 0;
	//	alert(voletDroit.style.paddingLeft);
		var padding=40;
	// Ce dernier n'ayant pas de taille fixe, on lui en attribut une
		var style=voletDroit.style;
			style.width=(width-padding)+"px";
			style.height=(height-padding)+"px";
	*/
	// On l'affiche
		voletDroit.style.visibility="visible";
		initMove(voletDroit);
}
