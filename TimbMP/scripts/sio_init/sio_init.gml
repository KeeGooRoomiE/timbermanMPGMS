/// sio_init()
function sio_init() {
	gml_pragma("global", "sio_init()");

#region macros
	//#macro URL "188.165.226.110:3003"
	#macro URL "127.0.0.1:3003"
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
		
		sio_addEvent("tree_send");
		sio_addEvent("tree_get");
		sio_addEvent("score_get");
		sio_addEvent("timer_get");
		sio_addEvent("win_lose_get");
#endregion


}
