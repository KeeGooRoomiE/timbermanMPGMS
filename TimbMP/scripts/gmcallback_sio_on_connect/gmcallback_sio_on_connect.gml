function gmcallback_sio_on_connect() {
	show_debug_message("connected to server!");
	//sio_emit_create_player();
	instance_create_depth(0,0,100,o_start_game)

}
