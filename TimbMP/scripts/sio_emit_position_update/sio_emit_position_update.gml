function sio_emit_position_update(argument0) {
	if !(room == rm04_end)
	{
	var eventName = "position_update";

	#region packet
			var data = ds_map_create();
			
				data[? "rightTrigger"] = argument0

				sio_emit(eventName, json_encode(data));
			ds_map_destroy(data);
	#endregion
	}
}
