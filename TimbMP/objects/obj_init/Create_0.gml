/// @description Insert description here
// You can write your code in this editor

//В этом обьекте передавай сиды, имена игроков и все нужное

var battle_id = 1214498;	//only number!
global.seed = (battle_id*256)*1.3;

random_set_seed(global.seed);

global.playerOneName = "PLAYER1";
global.playerTwoName = "PLAYER2";

global.playersMaxScore = 500;

global.sceneSkin = 0;
global.p1Skin = 0;
global.p2Skin = 0;

//debug
global.p1Skin = irandom_range(0,3);
global.p2Skin = irandom_range(0,3);