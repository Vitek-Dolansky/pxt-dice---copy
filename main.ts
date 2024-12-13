let diceSides: number = 6;
const diceMax: number = 99;
const diceMin: number = 2;
let locked = false;

let buttonWasPressed: number = 0;

 while (true) {
     if (input.buttonIsPressed(Button.A)) { // minus
     if (diceSides > diceMin) 
     {diceSides -= 1}
     basic.showNumber(diceSides)
     //diceSides = diceSides - 1
     }
     if (input.buttonIsPressed(Button.B)) { // plus
         if (diceSides < diceMax) 
         {diceSides += 1}
        basic.showNumber(diceSides)
         //diceSides = diceSides - 1
     }
     if (input.isGesture(Gesture.Shake)&& !locked) {let value = randint(1,diceSides)
         basic.showNumber(value); locked = true;
         }
         if (input.logoIsPressed())
         {locked = false

         }

}