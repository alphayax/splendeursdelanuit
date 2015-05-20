


function SubMenu(UL)
{
	this.UL=UL;
	this.item=new Array();
}
SubMenu.prototype.addItem=function(label,ahref)
{
	var LI=document.createElement("li");
		var A=document.createElement("a");
			A.setAttribute("href",ahref);
			A.appendChild(document.createTextNode(label));
		LI.appendChild(A);
	this.UL.appendChild(LI);
}







function Menu()
{
}

Menu.child=new Array();

Menu.addSubMenu=function(id)
{
	var UL=document.createElement("ul");
		this.child[id]=UL;
	return new SubMenu(UL);
}

Menu.getContent=function(id)
{
	return Menu.child[id];
}






// Construction de notre menu
	var maisons=Menu.addSubMenu("maisons");
		maisons.addItem("Situation","maisons.Situation.html");
		maisons.addItem("Panorama","maisons.Panorama.html");
		maisons.addItem("Dar Lala Fatma","maisons.DarLalaFatma.html");
		maisons.addItem("Dar Lala Yamina","maisons.DarLalaYamina.html");
		maisons.addItem("La restauration","maisons.restauration.html");
	var activites=Menu.addSubMenu("activites");
		activites.addItem("Les visites","activites.visites.html");
		activites.addItem("Les excursions","activites.excursions.html");
		activites.addItem("Bien être et soins","activites.soins.html");
		
	
	
	
	
	
	
	
	
	
	
