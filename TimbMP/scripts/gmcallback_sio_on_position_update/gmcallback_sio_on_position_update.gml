function gmcallback_sio_on_position_update() {
	var data = json_decode(argument[0]);
	
	var dat_rmid = real(data[? "room_id"]);
	//var dat_lt = string(data[? "leftTrigger"]);
	show_message(dat_rmid)
	//show_message(dat_lt)
	
	/*
	if (global.room_id = dat_rmid)
	{
		with(obj_other_tree){
			if(data[? "leftTrigger"] == true){
				leftTrigger = true;
			}else{
				rightTrigger = true;
			}
		}
	}
	*/

}
