/// @return ping in ms
function gmcallback_sio_on_timer_set(argument0) {	
	if !(room == rm04_end)
	{
		var data = json_decode(argument[0]);
		var dat_rmid = real(data[? "room_id"]);

		if (global.room_id = dat_rmid)
		{
			with(obj_game_manager) {
			var leftt = real(data[? "time"])
			leftTime = leftt;
			global.start = 1;
			}
		}
	}
}

