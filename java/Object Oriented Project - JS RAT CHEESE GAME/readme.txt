Overall Description:
The task is to implement 2D video game in javascript using object oriented fundamental concepts and terminology. In this game, a rat can move left,right,up and downward as per player's own choice to catch as many as cheese within a certain given timeframe. In order to increase the complexity level of this game there will be a number of bullets generated at random locations and will increase in numbers in every few seconds.


DrawImage Class - 
DrawImage class will render objects on the canvas window within the given x coordinates and y coordinates.

Cheese Class - 
Cheese class will render cheese on the canvas window using a parent class named DrawImage.This class will place cheese at random locations within the given x coordinates and y coordinates of the canvas window.

Rat Class - 
Rat class will render a rat on the canvas window using a parent class named DrawImage. By using up,down,left and right keystroke the user will update the rat location within the boundary of the canvas window.

Bullet Class - 
Bullet class will render bullets on the canvas window using a parent class named DrawImage.This class will update bullet x and y coordinates.This class will also check collision between bullet and rat.

Game Class - 
Game class will render a background image on the canvas window using a parent class named DrawImage.This class will update cheeses, bullets, timer values constantly on the top left corner of the window.

Keyboardcontrols Class - 
Keyboardcontrols class will have a keydown, keyup event listener which will detect keystroke input from the user and based on user input it will add or remove keystrokes elements from the KeysPress array.