/// @description Insert description here
// You can write your code in this editor

speed = spd;

if (a>0.1)
{
 a-=.1;
}
else
{ 
	instance_destroy(self)
}

if (spd>0.5)
{
	spd-=0.5;
}

//image_angle=direction;