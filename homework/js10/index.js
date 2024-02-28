const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

const newStarsArray = Array.from(starsEl)
const newEmojisArray = Array.from(emojisEl)


starsEl.forEach(elem => {
    elem.addEventListener('click', function (e) {
        const index = newStarsArray.indexOf(elem)

        for (let i = 0; i < starsEl.length; i++) {

            if (i <= index) {
                starsEl[i].classList.add('active')
                
                emojisLen(index)
            }
            else {
                starsEl[i].classList.remove('active')
                emojisLen(index)
            }

        }
    })
})

function emojisLen(indexStar) {
    for (let i = 0; i <= colorsArray.length; i++) {
        
        if (i === indexStar) {
            
            for (let x = 0; x < newEmojisArray.length; x++) {
                
                const indexEmoji = newEmojisArray.indexOf(newEmojisArray[i])
                
                if (indexEmoji === i && indexEmoji == 0) {
                    newEmojisArray[x].style.color = colorsArray[i]
                    newEmojisArray[x].style.position = 'relative'
                    newEmojisArray[x].style.left = '0px'
                    newEmojisArray[x].style.transition = '0.5s'
                    
                }
                if (indexEmoji === i && indexEmoji == 1) {
                    newEmojisArray[x].style.color = colorsArray[i]
                    newEmojisArray[x].style.position = 'relative'
                    newEmojisArray[x].style.left = '-50px'
                    newEmojisArray[x].style.transition = '0.5s'
                }
                if (indexEmoji === i && indexEmoji == 2) {
                    newEmojisArray[x].style.color = colorsArray[i]
                    newEmojisArray[x].style.position = 'relative'
                    newEmojisArray[x].style.left = '-100px'
                    newEmojisArray[x].style.transition = '0.5s'
                }
                if (indexEmoji === i && indexEmoji == 3) {
                    newEmojisArray[x].style.color = colorsArray[i]
                    newEmojisArray[x].style.position = 'relative'
                    newEmojisArray[x].style.left = '-150px'
                    newEmojisArray[x].style.transition = '0.5s'
                }
                if (indexEmoji === i && indexEmoji == 4) {
                    newEmojisArray[x].style.color = colorsArray[i]
                    newEmojisArray[x].style.position = 'relative'
                    newEmojisArray[x].style.left = '-200px'
                    newEmojisArray[x].style.transition = '0.5s'
                }
            }
        }
        
    }
}