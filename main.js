const mainElement = document.querySelector('body')


console.log('fucky')


const heads = document.createElement("div")
let front = document.createElement("img")
// front.src = "./heads.png";
// front.height = 220;
// front.width = 220;
// heads.append(front)
// mainElement.append(heads)





let coin = {
    state: 0,


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
            document.body.append("heads")
            image.src = 'heads.png'
          document.body.append(image)
        } else {
            document.body.append("tails")
            image.src ='tails.png'
          document.body.append(image)
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    // toHTML: function () {
    //     coin.flip()


    //     let image = document.createElement('img');
    //   if (this.state === 0){
    //       image.src = 'heads.png'
    //       document.body.append(image)
        
    //   }
    //   else {
    //       image.src ='tails.png'
    //       document.body.append(image)
    //   }
    // }
}

//        /* 3. Set the

// document.body.append(image)



function check(){
    coin.toString()
    // coin.toHTML()
}

check()
// function display20Flips()
//     for (i=0; i< display20Flips.length; i ++20 )

// function display20Images()
//     for (i=0; i< display20Images.length; i ++20 )