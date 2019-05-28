/* global countLettersApp, Vue, */ // eslint-disable-line no-unused-vars
var gametwo = {
  template: `
  <div>
    <h2>Game 2: Count Target Letter</h2>
    <p>Please enter a "target letter" into the box and then enter a series of letters. You may enter any letters. The output will keep track of all letters and count every target letter that is entered. If you enter a "." it will automatically disable the box.</p>
    <input
      type="text"
      id="enterChar"
      v-model="nextChar"
      :disabled=disableInput
      v-on:keyup="parseInput" autocomplete="off">
    <br><br>
    <input
      type="button"
      value="Enter"
      @click="onEnter">
    <br><br>
    <p>Inputted characters are: {{ previousInput }}</p>
    <p>The number of your target letter character is: {{ letterCount }}</p>
  </div>`,
  data: function () {
    return {
      targetLetter: '',
      input: '',
      letterCount: 0,
      nextChar: '',
      previousInput: ''
    }
  },
  computed: {
    disableInput () {
      return this.previousInput.includes('.')
    }
  },
  methods: {
    parseInput : function (event) {
      this.input = this.nextChar
      if (this.input.includes('.')) {
        this.output()
      }
      if (this.targetLetter === '') {
        this.enterTargetLetter()
      }
    },
    enterTargetLetter () {
      this.targetLetter = this.nextChar[0]
    },
    countLetters() {
      ++this.letterCount
    },
    output () {
      this.nextChar = ''
      for (let aChar of this.input) {
        if (aChar === this.targetLetter) {
          this.countLetters()
        }
      }
      this.previousInput += this.input
      this.input = ''
    },
    onEnter : function() {
      if (!this.disableInput) {
        this.output()
      }
    }
  }
}

Vue.component('gametwo', gametwo)