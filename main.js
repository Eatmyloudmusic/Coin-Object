const mainElement = document.querySelector('body')
// const
let leftLane = document.createElement('div')
leftLane.className = ("left");
document.body.append(leftLane)

let rightLane = document.createElement('div')
rightLane.className = ("right");
document.body.append(rightLane)


let coin = {
    state: 0,

    break: function (){
       
        let para = document.createElement('br')
    leftLane.appendChild(para)
    
    },

    flip: function () {
        this.state = Math.round(Math.random() * 1);
        console.log(this.state)
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },

    toString: function () {
        coin.flip()
        let image = document.createElement('img');
        if (this.state === 0) {
            leftLane.append("heads")
            coin.break()
        } else {
            leftLane.append("tails")
            coin.break()
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },


    toHTML: function () {
        coin.flip()


        let image = document.createElement('img');
      if (this.state === 0){
          image.src = 'heads.png'
        //   document.body.append(image)
        rightLane.append(image)

      }
      else {
          image.src ='tails.png'
        //   document.body.append(image)
        rightLane.append(image)
      }
    }
}

//        /* 3. Set the

// document.body.append(image)



function check(){
    for (i=0; i<20; i +=1){
    coin.toString()
    // leftLane.appendChild(para)

    coin.toHTML()
    
}}
check()




// function display20Flips(string)
//     const display20Flips = Array.from(strings)
//     for (i=0; i< display20Flips.length; i ++20 ){
//         let flips = display20Flips[index]

//         if (display20Flips[flips] === 0){
//             display20Flips[flips] =0
//         } else {
//             display20[flips] += 1
//         }
//     }
// display20Flips()

// function display20Images()
//     for (i=0; i< display20Images.length; i ++20 )

//---END OF LINE