function gmcallback_sio_on_create_player_other()
{
	var data = json_decode(argument[0]);
	var dat_rmid = real(data[? "room_id"]);

	if (global.room_id = dat_rmid)
	{
		
		with(obj_other_tree)
		{
			playerLives = 3
		}
		//global.p2Skin = data; //0 1 2 3
		//global.playerTwoName = data;
		
		with(obj_game_manager) {
		leftTime = 180;
		alarm[0]=1;
		}
	}
}
