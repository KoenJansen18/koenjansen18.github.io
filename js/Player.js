export default class Player {
    constructor(name, symbol) {
      //Make this work
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
        this.level = 1;
      }
  
    /**
     * Assignment
     * Add a function to add a point to the player total points
     */
      //function addPoints() {
        addPoint = function () {
          console.log(this.points)
          this.points +=1;
          console.log(this.points)
        }
      }
  
    /**
     * Assignment
     * Add a function to raise the level of the Player, the leven rises one every 10 points. 
     * Player starts at level 1
     * so if player has 10 points, then he will be level 2, if he has 20 points, he will be level 3 etc
     * Connect the method in the add point method. 
     */
      //getLevel = function(){
          //return Math.min(this.score/10)
          //}