const KEYFRAMES_ANIMATION = `
@keyframes a {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
`

const STYLES = `
div {
  position: relative;
  width: 20px;
  height: 20px;
}
div i {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 10%;
  height: 25%;
  border-radius: 50%/20%;
  animation: a 1s linear infinite;
  animation-play-state: paused;
}

div i:nth-child(1) {
  animation-delay: -1.67s;
  transform: rotate(30deg) translate(0, -150%);
}

div i:nth-child(2) {
  animation-delay: -1.58s;
  transform: rotate(60deg) translate(0, -150%);
}

div i:nth-child(3) {
  animation-delay: -1.5s;
  transform: rotate(90deg) translate(0, -150%);
}

div i:nth-child(4) {
  animation-delay: -1.42s;
  transform: rotate(120deg) translate(0, -150%);
}

div i:nth-child(5) {
  animation-delay: -1.33s;
  transform: rotate(150deg) translate(0, -150%);
}

div i:nth-child(6) {
  animation-delay: -1.25s;
  transform: rotate(180deg) translate(0, -150%);
}

div i:nth-child(7) {
  animation-delay: -1.17s;
  transform: rotate(210deg) translate(0, -150%);
}

div i:nth-child(8) {
  animation-delay: -1.08s;
  transform: rotate(240deg) translate(0, -150%);
}

div i:nth-child(9) {
  animation-delay: -1s;
  transform: rotate(270deg) translate(0, -150%);
}

div i:nth-child(10) {
  animation-delay: -0.92s;
  transform: rotate(300deg) translate(0, -150%);
}

div i:nth-child(11) {
  animation-delay: -0.83s;
  transform: rotate(330deg) translate(0, -150%);
}

div i:nth-child(12) {
  animation-delay: -0.75s;
  transform: rotate(360deg) translate(0, -150%);
}

div.a i {
  animation-play-state: running;
}

div[color=white] i {
  background: white;
}

div[color=gray] i {
  background: #8c8c8c;
}

div[color=black] i {
  background: #000;
}

div[size=large] {
  width: 35px;
  height: 35px;
}

div[size=large] i {
  width: 8.57%;
  height: 25.73%;
  border-radius: 50%/16.67%;
}`

export default `
<style>
  ${KEYFRAMES_ANIMATION}
  ${STYLES}
</style>
`
