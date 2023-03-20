function gmcallback_sio_on_create_player()
{
	if !(room == rm04_end)
	{

		
		var data = json_decode(argument[0]);	
		var dat_rmid = real(data[? "room_id"]);
		var dat_plid = real(data[? "user_id"]);
		var dat_plhp = real(data[? "hp"]);
		var dat_plsc = real(data[? "score"]);
		var dat_usern = string(data[? "username"]);
		
		global.playerOneName = string(dat_usern);
		global.curPlayerScore = real(dat_plsc);
		global.playerOneScore = real(dat_plsc);
		global.playersMaxScore = 500 - global.curPlayerScore;
		/*
		var dat_treearr = string(data[? "tree"]);
		//show_message(dat_treearr)
		//show_message("IN COMIN!")
		show_debug_message(dat_treearr)
		*/
		var icrt = instance_create_depth(184,304,0,obj_player_tree)
		with (icrt)
		{
			image_xscale = 1.201923
			image_yscale = 1.451923
			playerLives = real(dat_plhp);
			playerScore = real(dat_plsc);

			global.gcasetree0 = 0;
			global.gcasetree1 = 0;
			global.gcasetree2 = 0;
			global.gcasetree3 = 0;
			global.gcasetree4 = 0;
			global.gcasetree5 = 0;
			global.gcasetree6 = 0;
			global.gcasetree7 = 0;
			global.gcasetree8 = 0;
			global.gcasetree9 = 0;
		}


		var dat_rmid = real(data[? "room_id"]);
		global.room_id = dat_rmid
		//global.p1Skin = data; //0 1 2 3
		//global.curPlayerScore = dat_plsc;
	}
}
