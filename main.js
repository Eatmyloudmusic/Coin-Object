const mainElement = document.querySelector('body')


console.log('fucky')


const heads = document.createElement("div")
let front = document.createElement("img")
front.src = "./assets/sonic.jpg";
front.height = 220;
front.width = 220;
heads.append(front)
mainElement.append(heads)





let coin = {
    state: 0,


    flip: function () {
        this.state = Math.round(Math.random() * 1);
        



        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        coin.flip()
        if (this.state === 0) {
            console.log("Heads")
            document.body.append("go home")
        } else {
            document.body.append("tails")
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        coin.flip()


        let image = document.createElement('img');
      
        /* 3. Set the