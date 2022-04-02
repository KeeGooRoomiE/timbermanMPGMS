/// @description Scene setups


#region -- Set skin species
global.treeOrigin = spr_red_tree_origin;
global.treeCell = spr_red_tree_cell;
global.treeBranch = spr_red_tree_branch;

//player one skin
switch (global.p1Skin)
{
	case 0: global.playerOneSprite = spr_forest_chomper; break;
	case 1: global.playerOneSprite = spr_santa_chopper; break;
	case 2: global.playerOneSprite = spr_red_chopper; break;
	case 3: global.playerOneSprite = spr_green_chopper; break;
}
//player one skin
switch (global.p2Skin)
{
	case 0: global.playerTwoSprite = spr_forest_chomper; break;
	case 1: global.playerTwoSprite = spr_santa_chopper; break;
	case 2: global.playerTwoSprite = spr_red_chopper; break;
	case 3: global.playerTwoSprite = spr_green_chopper; break;
}

global.playerGrave = spr_grave;
#endregion

#region -- Set BKG species
backBGK = 0;
hillBGK = 0;
cloudsBKG = 0;
othCloudsBKG = 0;
treesBKG = 0;
branchesBKG = 0;
bkgBKG = 0;
#endregion

#region -- Set player IDs
global.pl1 = noone;
global.pl2 = noone;
#endregion

#region -- Set things
leftTime = 180;
alarm[0]=1;

depth = -8;

isPlayerOneWins = false;
isPlayerTwoWins = false;
isTie = false;
isPlayerReachedNest = false;

playersActive = true;
#endregion