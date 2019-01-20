const KEYFRAMES_ANIMATION = `
@keyframes animation {
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
.s {
  position: relative;
  width: 20px;
  height: 20px;
}
.s .b {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 10%;
  height: 25%;
  border-radius: 50%/20%;
  animation: animation 1s linear infinite;
  animation-play-state: paused;
}

.s .b:nth-child(1) {
  animation-delay: -1.67s;
  transform: rotate(30deg) translate(0, -150%);
}

.s .b:nth-child(2) {
  animation-delay: -1.58s;
  transform: rotate(60deg) translate(0, -150%);
}

.s .b:nth-child(3) {
  animation-delay: -1.5s;
  transform: rotate(90deg) translate(0, -150%);
}

.s .b:nth-child(4) {
  animation-delay: -1.42s;
  transform: rotate(120deg) translate(0, -150%);
}

.s .b:nth-child(5) {
  animation-delay: -1.33s;
  transform: rotate(150deg) translate(0, -150%);
}

.s .b:nth-child(6) {
  animation-delay: -1.25s;
  transform: rotate(180deg) translate(0, -150%);
}

.s .b:nth-child(7) {
  animation-delay: -1.17s;
  transform: rotate(210deg) translate(0, -150%);
}

.s .b:nth-child(8) {
  animation-delay: -1.08s;
  transform: rotate(240deg) translate(0, -150%);
}

.s .b:nth-child(9) {
  animation-delay: -1s;
  transform: rotate(270deg) translate(0, -150%);
}

.s .b:nth-child(10) {
  animation-delay: -0.92s;
  transform: rotate(300deg) translate(0, -150%);
}

.s .b:nth-child(11) {
  animation-delay: -0.83s;
  transform: rotate(330deg) translate(0, -150%);
}

.s .b:nth-child(12) {
  animation-delay: -0.75s;
  transform: rotate(360deg) translate(0, -150%);
}

.s.a .b {
  animation-play-state: running;
}

.s[color=white] .b {
  background: white;
}

.s[color=gray] .b {
  background: #8c8c8c;
}

.s[color=black] .b {
  background: #000;
}

.s[size=large] {
  width: 35px;
  height: 35px;
}

.s[size=large] .b {
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
