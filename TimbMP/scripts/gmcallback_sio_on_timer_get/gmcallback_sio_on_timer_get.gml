/// @return ping in ms
function gmcallback_sio_on_timer_get(argument0) {	
	var data = json_decode(argument[0]);
	
		with(obj_game_manager) {
		var leftt = real(data[? "leftTime"])
		leftTime = leftt;
		global.start = 1;
		}

}
