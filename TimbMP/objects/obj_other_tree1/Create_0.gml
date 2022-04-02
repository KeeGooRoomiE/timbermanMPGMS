/// @description Init

// Starting vars
treearr[0] = 0;
treecellarr[0] = 0;
treebrarr[0] = 0;
arrL=0; 

treeCellImg = 0;
treeBrImg = 0;
treeCellSpr = spr_red_tree_cell;
treeBrSpr = spr_red_tree_branch;

xsc = 0.8;
ysc = 0.8;

global.pl2 = id;

playerReachedNest = false;

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
for (i=0; i<10; i++)
{
	treearr[i]=0;
	arrL++;
}

//init tree cells for images
for (i=0; i<10; i++)
{
	treecellarr[i]=irandom_range(0,4);
}

//init tree branches images
for (i=0; i<10; i++)
{
	treebrarr[i]=2;
}
#endregion


#region -- init player vars
isPlayerLive = true;		//trigger for changing sprite
canChomp = true;			//trigger for action availability
isChompingLeft = false;		//trigger for left movement
isChompingRight = false;	//trigger for right movement

playerXpos = x-36;			//player X position vlaue
playerSpr = global.playerTwoSprite;		//player current sprite

player = instance_create_depth(playerXpos, y-6,depth-1,obj_player);

leftTrigger = false;
rightTrigger = false;
#endregion

//