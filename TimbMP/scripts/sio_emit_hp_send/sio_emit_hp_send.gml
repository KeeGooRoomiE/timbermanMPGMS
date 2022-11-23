function sio_emit_hp_send(argument0) {
	if !(room == rm04_end)
	{
	var eventName = "hp_send";

	#region packet
			var data = ds_map_create();
			
				data[? "hp"] = real(argument0)

				sio_emit(eventName, json_encode(data));
			ds_map_destroy(data);
	#endregion
	}
}
