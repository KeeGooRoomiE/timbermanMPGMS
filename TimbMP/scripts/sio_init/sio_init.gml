/// sio_init()
function sio_init() {
	gml_pragma("global", "sio_init()");

#region macros
	//#macro URL "188.165.226.110:3003" // MP
	
	#macro URL "95.163.242.141:3004" // CZ
	
	//#macro URL "127.0.0.1:3004"
#endregion

#region SocketIO
		sio_connect_by_url(URL);
#endregion

#region SocketIO:Events
		sio_addEvent("create_player");
		sio_addEvent("create_player_other");
		sio_addEvent("destroy_player");
		sio_addEvent("position_update");
		sio_addEvent("start");
		
		sio_addEvent("go_room"); // init tree
		
		sio_addEvent("win_lose_get");
		sio_addEvent("timer_get");
		sio_addEvent("timer_set");
		sio_addEvent("hp_send");
		sio_addEvent("score_send");
		sio_addEvent("datax_set");
		sio_addEvent("datax_get");
		sio_addEvent("disconnect_player");
		sio_addEvent("tree_send");
		
		sio_addEvent("tree_set");
#endregion


}
