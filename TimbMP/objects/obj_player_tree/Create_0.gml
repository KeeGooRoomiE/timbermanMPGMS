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
	treearr[i]=0;
	arrL++;
}

//init tree cells for images
for (i=0; i<treeLength; i++)
{
	/*switch (i)
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
	}
	*/
	
	treebrarr[i]=2;
}

#endregion

treeLength=0;

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

playerLives = 3;

#endregion

//