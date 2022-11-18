/// @description Left action trigger
if (global.start = 1)
{
	leftTrigger = true;
	sio_emit_position_update(false);
}
