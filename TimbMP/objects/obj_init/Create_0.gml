global.playerOneName = "YOU";
global.playerTwoName = "WAITING...";

init();
var battle_id = 1214498;	//only number!
global.seed = battle_id;

random_set_seed(global.seed);

global.playersMaxScore = 500;

global.sceneSkin = 0;
global.p1Skin = 0;
global.p2Skin = 0;

global.curPlayerScore = 0;

room_goto_next();
//debug
//global.p1Skin = irandom_range(0,3);
//global.p2Skin = irandom_range(0,3);


