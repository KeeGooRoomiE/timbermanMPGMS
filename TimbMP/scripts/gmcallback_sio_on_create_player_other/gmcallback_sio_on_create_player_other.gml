function gmcallback_sio_on_create_player_other()
{
	var data = json_decode(argument[0]);
	var dat_rmid = real(data[? "room_id"]);
	var dat_pl2id = real(data[? "user_id"]);
	var dat_plhp = real(data[? "hp"]);
	
	if (global.room_id = dat_rmid)
	{
		
		with(obj_other_tree)
		{
			playerLives = real(dat_plhp);
		}
		//global.p2Skin = data; //0 1 2 3
		//global.playerTwoName = data;
		
		with(obj_game_manager) {
		leftTime = 180; // TODO socketOM! //real(data[? "leftTime"]);
		global.start = 1;
		alarm[0]=1;
		}
		
		global.playerTwoName = dat_pl2id;
	}
}
