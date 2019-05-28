/* global countLettersApp, Vue, */ // eslint-disable-line no-unused-vars
var gameone = {
  template: `<div>
               <h2>Game 1: Count G's</h2>
               <p>Please enter letters into this box. You may enter any letters. The output will keep track of all letters and count every "g" or "G" that is entered before you use a "." </p>
               <input type="text"
                id="enterChar"
                 v-model="nextChar"
                 :disabled=disableInput
                 v-on:keyup="parseInput" autocomplete="off">
                  <br><br>
               <input
                type="button" value="Enter" @click="onEnter">
               <br><br>
               <p>Inputted characters are: {{ previousInput }}</p>
               <p>The number of inputted characters is: {{ letterCount }}</p>
            </div>`,
  data: function () {
    return {
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
    count : function() {
    ++this.letterCount
    },
    type : function () {
        this.nextChar = ''
        for (let aChar of this.input) {
          if (aChar.toLowerCase() === 'g') {
            this.count()
          }
        }
      this.previousInput += this.input
      this.input = ''

    },
    parseInput: function (event) {
      console.log('parsed')
      this.input = this.nextChar
      if (this.input.includes('.')){
        this.type()
      }
    },
    onEnter : function() {
      if (!this.disableInput) {
        this.type()
      }
    }
  }
}

Vue.component('gameone', gameone)
