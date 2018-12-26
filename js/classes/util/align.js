class Align
{
	static scaleToGameW(obj,per)
	{
		obj.displayWidth=game.config.width*per;
		obj.scaleY=obj.scaleX;
	}

	static scaleToGameH(obj,per)
	{
		obj.displayHeight=game.config.height*per;
		obj.scaleX=obj.scaleY;
	}
}