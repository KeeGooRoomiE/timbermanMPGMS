/// @description Insert description here
// You can write your code in this editor

//check win\false statements

if ( global.pl1 != noone ) and ( global.pl2 != noone )
{
	
	//player one dead
	if ( !global.pl1.isPlayerLive )
	{
		isPlayerTwoWins = true;
	}
	
	//player two dead
	if ( !global.pl2.isPlayerLive )
	{
		isPlayerOneWins = true;
	}
	
	//player one reached nest
	if ( global.pl1.playerReachedNest )
	{
		isPlayerOneWins = true;
		isPlayerReachedNest = true;
	}
	
	//player two reached nest
	if ( global.pl2.playerReachedNest )
	{
		isPlayerTwoWins = true;
		isPlayerReachedNest = true;
	}
}