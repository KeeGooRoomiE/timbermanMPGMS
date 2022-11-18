/// @description Right action trigger
if (global.start = 1)
{
	rightTrigger = true;
	sio_emit_position_update(true);
}
