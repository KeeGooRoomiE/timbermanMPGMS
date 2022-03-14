/// @description Insert description here
// You can write your code in this editor

if (isPlayerLive)
{
	playerSpr=spr_player;
		
	if (isChompingLeft)
	{
		playerXpos=x-32;
		isChompingLeft=false;
	}
		
	if (isChompingRight)
	{
		playerXpos=x+32;
		isChompingRight=false;
	}
}
else
{
	playerSpr=spr_grave;
}