/// @description Initcasetree0 = global.gcasetree0;
casetree0 =  global.gcasetree0;
casetree1 =  global.gcasetree1;
casetree2 =  global.gcasetree2;
casetree3 =  global.gcasetree3;
casetree4 =  global.gcasetree4;
casetree5 =  global.gcasetree5;
casetree6 =  global.gcasetree6;
casetree7 =  global.gcasetree7;
casetree8 =  global.gcasetree8;
casetree9 =  global.gcasetree9;
casetree10 = global.gcasetree10;

/// @description Init




// Starting vars
treearr[0] = 0;
treecellarr[0] = 0;
treebrarr[0] = 0;
arrL=0; 

treeCellImg = 0;
treeBrImg = 0;
sprite_index = global.treeOrigin;
treeCellSpr = global.treeCell;
treeBrSpr = global.treeBranch;

xsc = 1.20;

playerScore = 0;
treeLength = 10;
/*
tgdgs = (50 - global.curPlayerScore)
if (11 > tgdgs)
{
treeLength = 10;
}else{
	treeLength = tgdgs;
}
*/
global.pl1 = id;

//====================================
//TREE CELLS
//
//0 - neutral
//1 - left
//2 - right
//3 - nest (win trigger in other mode)
//4 - empty (all after nest)
//
//====================================


#region -- init tree array
for (i=0; i<treeLength; i++)
{
	switch (i)
	{	
		case 0: treearr[i]=real(casetree0); arrL++; break;
		case 1: treearr[i]=real(casetree1); arrL++; break;
		case 2: treearr[i]=real(casetree2); arrL++; break;
		case 3: treearr[i]=real(casetree3); arrL++; break;
		case 4: treearr[i]=real(casetree4); arrL++; break;
		case 5: treearr[i]=real(casetree5); arrL++; break;
		case 6: treearr[i]=real(casetree6); arrL++; break;
		case 7: treearr[i]=real(casetree7); arrL++; break;
		case 8: treearr[i]=real(casetree8); arrL++; break;
		case 9: treearr[i]=real(casetree9); arrL++; break;
		case 10:treearr[i]=real(casetree10); arrL++; break;
	}
		
		
	//treearr[i]= irandom_range(0,3) //0; // Забиваем первые 10 значением 0 (пусто)
	//arrL++; 
	
}


//init tree cells for images
for (i=0; i<treeLength; i++)
{
	
	/*
	switch (i)
	{
		case 0: treecellarr[i]=irandom_range(0,4); break;
		case 1: treecellarr[i]=irandom_range(0,4); break;
		case 2: treecellarr[i]=irandom_range(0,4); break;
		case 3: treecellarr[i]=irandom_range(0,4); break;
		case 4: treecellarr[i]=irandom_range(0,4); break;
		case 5: treecellarr[i]=5; break;
		case 6: treecellarr[i]=5; break;
		case 7: treecellarr[i]=5; break;
		case 8: treecellarr[i]=5; break;
		case 9: treecellarr[i]=5; break;
		case 10:treecellarr[i]=5; break;
	}
	*/
	
	treecellarr[i]=irandom_range(0,4);
}

//init tree branches images
for (i=0; i<treeLength; i++)
{
			switch (treearr[i])
		{
			case 0: treebrarr[i] = 2; break;
			case 1: treebrarr[i] = choose(0,1); break;
			case 2: treebrarr[i] = choose(3,4); break;
			case 3: treebrarr[i] = 2; break;
			case 4: treebrarr[i] = 2; break;
			default: treebrarr[i] = 2; break;
		}
	/*
	switch (i)
	{
		case 0: treebrarr[i]=2; break;
		case 1: treebrarr[i]=2; break;
		case 2: treebrarr[i]=2; break;
		case 3: treebrarr[i]=2; break;
		case 4: treebrarr[i]=2; break;
		case 5: treebrarr[i]=5; break;
		case 6: treebrarr[i]=6; break;
		case 7: treebrarr[i]=6; break;
		case 8: treebrarr[i]=6; break;
		case 9: treebrarr[i]=6; break;
		case 10:treebrarr[i]=6; break;
	}*/
	
	
	//treebrarr[i]=2;
}

#endregion

//treeLength=0;

#region -- init player vars

isPlayerLive = true;		//trigger for changing sprite
canChomp = true;			//trigger for action availability
isChompingLeft = false;		//trigger for left movement
isChompingRight = false;	//trigger for right movement

playerXpos=x-36 * xsc;		//player X position vlaue
playerSpr = global.playerOneSprite;		//player current sprite
playerGraveSpr = global.playerGrave;

player = instance_create_depth(playerXpos, y-6,depth-1,obj_player);
side = 1;

leftTrigger = false;
rightTrigger = false;

playerReachedNest = false;

playerLives = 1;

#endregion

//