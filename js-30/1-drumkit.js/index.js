"use strict"

const keys = document.querySelectorAll('.key')
console.log(keys)

// event
keys.forEach((el) => el.addEventListener(('transitionend'), removeTransition))
// for each <div> with .transition property, remove its .transition property when transition comes to an end

function playSound (e) {
    console.log(e.key)
    const audioEl = document.querySelector(`audio[data-key=${e.key}]`) // select <audio> tag corresponding to the event keypress
    const keyPress = document.querySelector(`.key[data-key=${e.key}]`) // select <div> with class .key corresponding to the event keypress
    console.log('audioEl', audioEl)
    console.log('keyPress', keyPress)
    if (!audioEl) return; // stop the function
    audioEl.currentTime = 0 // rewind to the start for playing if multiple keypresses
    audioEl.play()
    keyPress.classList.add('playing') // add css class .playing for short animation
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // select only properties with a transform effect and console.log it when its transition is done
    console.log(e)
    this.classList.remove('playing') // remove .playing class to each key element in the forEach nodeList created from the event
}

window.addEventListener('keydown', playSound)