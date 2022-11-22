function sio_emit_hp_send(argument0) {
	var eventName = "hp_send";

#region packet
		var data = ds_map_create();
			
			data[? "hp"] = real(argument0)

			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
