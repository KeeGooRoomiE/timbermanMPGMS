/// @descr Send player creation packet to the server
function sio_emit_create_player() {

	if !(room == rm04_end)
	{
		var eventName = "create_player";

		#region packet
				var data = ds_map_create();
					data[? "user_id"] = global.user_id;
					data[? "room_id"] = global.room_id;
					data[? "battle_id"] = global.battle_id;
					sio_emit(eventName, json_encode(data));
				ds_map_destroy(data);
		#endregion
	}

}
