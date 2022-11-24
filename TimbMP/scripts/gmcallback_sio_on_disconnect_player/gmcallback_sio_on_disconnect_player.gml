function gmcallback_sio_on_disconnect_player() {
	if !(room == rm04_end)
	{
		var data = json_decode(argument[0]);
	
		var dat_rmid = real(data[? "room_id"]);
		var dat_usrid = data[? "user_id"];
	
		if ( (global.room_id = real(dat_rmid)) and (global.user_id = real(dat_usrid)) )
		{
			room_goto(rm05_dc)
		}
	}
}
