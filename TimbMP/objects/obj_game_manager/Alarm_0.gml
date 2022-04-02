/// @description Countdown
// You can write your code in this editor

if (leftTime > 0)
{
	alarm[0] = 1 * room_speed;
	
	if ( playersActive )
	{
		leftTime -= 1;
	}
}