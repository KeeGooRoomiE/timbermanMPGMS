function sio_emit_score_send(argument0) {
	var eventName = "score_send";

#region packet
		var data = ds_map_create();
			
			data[? "score"] = real(argument0)

			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
