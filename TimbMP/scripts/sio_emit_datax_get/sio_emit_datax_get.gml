function sio_emit_datax_get(argument0) {
	var eventName = "datax_get";

#region packet
		var data = ds_map_create();
			
			

			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
