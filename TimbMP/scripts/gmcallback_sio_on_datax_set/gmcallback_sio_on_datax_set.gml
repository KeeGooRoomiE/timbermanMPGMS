/// @return ping in ms
function gmcallback_sio_on_datax_set(argument0) {	
	var data = json_decode(argument[0]);
	var dat_rmid = real(data[? "room_id"]);
	var dat_plsc = real(data[? "score"]);
	var dat_plhp = real(data[? "hp"]);

	if (global.room_id = dat_rmid)
	{
		with(obj_other_tree){
			playerScore = real(dat_plsc);
			playerLives = real(dat_plhp);
		}

	}

}

