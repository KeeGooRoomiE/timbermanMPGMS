/// @description Scene setups

#region -- Set skin species

switch (global.sceneSkin)
{
	case 0: global.treeOrigin = spr_red_tree_origin; 
			global.treeCell = spr_red_tree_cell;
			global.treeBranch = spr_red_tree_branch;
			break;
	case 1: global.treeOrigin = spr_snow_tree_origin; 
			global.treeCell = spr_snow_tree_cell;
			global.treeBranch = spr_snow_tree_branch;
			break;
	case 2: global.treeOrigin = spr_night_tree_origin; 
			global.treeCell = spr_night_tree_cell;
			global.treeBranch = spr_night_tree_branch;
			break;
}

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

switch (global.sceneSkin)
{
	case 0: global.playerGrave = spr_red_grave; break;
	case 1: global.playerGrave = spr_snow_grave; break;
	case 2: global.playerGrave = spr_night_grave; break;
}
#endregion

#region -- Set BKG species

bkgBKG = bkg01_0;
hillBKG = bkg02_0;
thillBKG = bkg03_0;
branchesBKG = bkg04_0;
treesBKG = bkg05_0;
cloudsBKG = bkg06_0;
othCloudsBKG = bkg07_0;

switch (global.sceneSkin)
{
	case 0: 
		bkgBKG = bkg01_0;
		hillBKG = bkg02_0;
		thillBKG = bkg03_0;
		branchesBKG = bkg04_0;
		treesBKG = bkg05_0;
		cloudsBKG = bkg06_0;
		othCloudsBKG = bkg07_0;
		break;
	case 1:
		bkgBKG = bkg01_1;
		hillBKG = bkg02_1;
		thillBKG = bkg03_1;
		branchesBKG = bkg04_1;
		treesBKG = bkg05_1;
		cloudsBKG = bkg06_1;
		othCloudsBKG = bkg06_1;
		break;
	case 2:
		bkgBKG = bkg01_2;
		hillBKG = bkg02_2;
		thillBKG = bkg03_2;
		branchesBKG = bkg04_2;
		treesBKG = bkg05_2;
		cloudsBKG = bkg06_0;
		othCloudsBKG = bkg07_0;
		break;
}
#endregion

#region -- Set player IDs
global.pl1 = noone;
global.pl2 = noone;
#endregion

#region -- Set things
leftTime = 180;
//alarm[0]=1;
depth = -8;

isPlayerOneWins = false;
isPlayerTwoWins = false;
isTie = false;
isPlayerReachedNest = false;

playersActive = true;

#endregion

#region -- Set BKG

hBKG = layer_get_id("Hill");
hBKGid = layer_background_get_id(hBKG);
layer_background_sprite(hBKGid, hillBKG);

thBKG = layer_get_id("TopHill");
thBKGid = layer_background_get_id(thBKG);
layer_background_sprite(thBKGid, thillBKG);

tBKG = layer_get_id("Trees");
tBKGid = layer_background_get_id(tBKG);
layer_background_sprite(tBKGid, treesBKG);

brBKG = layer_get_id("Branches");
brBKGid = layer_background_get_id(brBKG);
layer_background_sprite(brBKGid, branchesBKG);

cBKG = layer_get_id("Clouds");
cBKGid = layer_background_get_id(cBKG);
layer_background_sprite(cBKGid, cloudsBKG);

ocBKG = layer_get_id("OuterClouds");
ocBKGid = layer_background_get_id(ocBKG);
layer_background_sprite(ocBKGid, othCloudsBKG);

bBKG = layer_get_id("BKG");
bBKGid = layer_background_get_id(bBKG);
layer_background_sprite(bBKGid, bkgBKG);

#endregion