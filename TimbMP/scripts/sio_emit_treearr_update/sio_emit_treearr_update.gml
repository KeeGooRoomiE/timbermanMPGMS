function sio_emit_treearr_update(argument0) {
	if !(room == rm04_end)
	{
	var eventName = "tree_send";

	#region packet
			var data = ds_map_create();
			
				data[? "treearr"] = argument0;

				sio_emit(eventName, json_encode(data));
			ds_map_destroy(data);
	#endregion
	}
}
