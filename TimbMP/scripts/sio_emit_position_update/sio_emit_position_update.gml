function sio_emit_position_update(argument0) {
	var eventName = "position_update";

#region packet
		var data = ds_map_create();
			if (argument0 == true)
			{
				data[? "rightTrigger"] = true;
			}else{
				data[? "rightTrigger"] = false;
			}
			sio_emit(eventName, json_encode(data));
		ds_map_destroy(data);
#endregion


}
