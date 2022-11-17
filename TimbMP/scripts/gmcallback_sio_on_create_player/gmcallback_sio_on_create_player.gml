function gmcallback_sio_on_create_player()
{
	var data = json_decode(argument[0]);
		with(obj_player_tree)
		{
			playerLives = 3
		}
		var dat_rmid = real(data[? "room_id"]);
		global.room_id = dat_rmid
		//global.p1Skin = data; //0 1 2 3
		//global.playerOneName = data;
}
