/// @description Scene setups

#region -- Set seed
random_get_seed(global.seed);
#endregion


#region -- Set skin species
global.treeOrigin = spr_red_tree_origin;
global.treeCell = spr_red_tree_cell;
global.treeBranch = spr_red_tree_branch;

global.playerOneSprite = spr_player;
global.playerTwoSprite = spr_player;
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
isPlayerReachedNest = false;

playersActive = true;
#endregion