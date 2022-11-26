function gmcallback_sio_on_create_player()
{
	if !(room == rm04_end)
	{
		with (instance_create_depth(184,304,0,obj_player_tree))
		{
			 casetree0 = 0;
			 casetree1 = 0;
			 casetree2 = 1;
			 casetree3 = 1;
			 casetree4 = 0;
			 casetree5 = 0;
			 casetree6 = 0;
			 casetree7 = 0;
			 casetree8 = 0;
			 casetree9 = 1;
			 casetree10 = 0;
		}
		
		var data = json_decode(argument[0]);	
		var dat_rmid = real(data[? "room_id"]);
		var dat_plid = real(data[? "user_id"]);
		var dat_plhp = real(data[? "hp"]);
		var dat_plsc = real(data[? "score"]);
		with(obj_player_tree)
		{
			playerLives = real(dat_plhp);
			playerScore = real(dat_plsc);
		}
		var dat_rmid = real(data[? "room_id"]);
		global.room_id = dat_rmid
		//global.p1Skin = data; //0 1 2 3
		global.playerOneName = dat_plid;
		//global.curPlayerScore = dat_plsc;
	}
}
