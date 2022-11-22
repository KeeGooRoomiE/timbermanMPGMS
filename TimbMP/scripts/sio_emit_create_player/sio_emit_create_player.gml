/// @descr Send player creation packet to the server
function sio_emit_create_player() {

	var eventName = "create_player";

#region packet
		var data = ds_map_create();
			data[? "user_id"] = global.user_id;
			data[? "room_id"] = global.room_id;
			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
