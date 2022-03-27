/// @description Hit effect

var r = irandom_range(4,7);
repeat (r)
{
	instance_create_depth(x,y,depth-1,obj_effect_particle);
}