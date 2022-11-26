/// @return ping in ms
function gmcallback_sio_on_tree_set(argument0) {	
	
	if !(room == rm04_end)
	{
		var data = json_decode(argument[0]);
		var dat_rmid = real(data[? "room_id"]);
		
		var dat_treearr = data[? "treearr"];
		show_debug_message(dat_treearr)
		
		/*
		if (global.room_id = dat_rmid)
		{
			
			with(obj_other_tree){
			treearr[0] = dat_treearr;
			}
			
		}
		*/
	}
}

