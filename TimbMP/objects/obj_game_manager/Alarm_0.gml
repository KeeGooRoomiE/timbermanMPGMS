/// @description GetTime	
if ( playersActive )
{
	sio_emit_timer_get()
	sio_emit_datax_get()
}
alarm[0] = 1 * room_speed/3;
