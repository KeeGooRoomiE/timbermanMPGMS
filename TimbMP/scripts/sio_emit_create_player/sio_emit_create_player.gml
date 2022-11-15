/// @descr Send player creation packet to the server
function sio_emit_create_player() {

	var eventName = "create_player";
	var user_id = get_string("Enter your user_id", "");
	var room_id = get_string("Enter your room_id", "");

#region packet
		var data = ds_map_create();
			data[? "user_id"] = user_id;
			data[? "room_id"] = room_id;
			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
