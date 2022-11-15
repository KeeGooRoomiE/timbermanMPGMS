function gmcallback_sio_on_create_player() {
	var data = json_decode(argument[0]);

	with(instance_create_depth(data[? "x"], data[? "y"], 0, oPlayer)) {
		isLocalPlayer = true;
	
		playerId = data[? "id"];
		username = data[? "username"];
	}


}
