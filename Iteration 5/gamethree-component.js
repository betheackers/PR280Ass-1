/* global countLettersApp, Vue, */ // eslint-disable-line no-unused-vars
var gamethree = {
  template: `
  <div>
    <h2>Game 3: Count +, - & 0s</h2>
    <p>Please enter a series of numbers. End with a rogue of 999. The output will show the number of positive, negative numbers and zeroes entered.
    </p>
    <input type="number"
      id="enterChar"
      maxlength="3"
      v-model="nextNumber"
      :disabled=disableInput
      v-on:keyup="parseInput" autocomplete="off">
    <br><br>
    <input
      type="button"
      value="Enter"
      @click="onEnter">
    <br><br>
    <p>Inputted numbers are:
      {{ previousInput }}
    </p>
    <p>The number of positive numbers are:
      {{ positiveNumbers }}
    </p>
    <p>The number of negative numbers are:
      {{ negativeNumbers }}
    </p>
    <p>The number of zeroes are:
      {{ zeroes }}
    </p>
  </div>`,
  data: function () {
    return {
      positiveNumbers: null,
      negativeNumbers: null,
      zeroes: null,
      input: null,
      nextNumber: null,
      previousInput: '',
      rogue: 999
    }
  },
  computed: {
    disableInput () {
      if (this.previousInput === null) {
        return false
      }
      return this.previousInput.toString().includes(this.rogue.toString())
    }
  },
  methods: {
    parseInput: function (event) {
      this.input = this.nextNumber
      if (this.input === this.rogue) {
        this.output()
      }
    },
    countPositive () {
      ++this.positiveNumbers
    },
    countNegative () {
      ++this.negativeNumbers
    },
    countZeroes () {
      ++this.zeroes
    },
    output () {
      this.nextNumber = null
      if (this.input == 0) {
        this.countZeroes()
      } else if (this.input > 0) {
        this.countPositive()
      } else if (this.input < 0) {
        this.countNegative()
      }
      if (this.input == this.rogue) {
        console.log('rogue')
        this.positiveNumbers = this.positiveNumbers - 1
      }
      if (this.previousInput === '') {
        this.previousInput += this.input.toString()
      } else {
        this.previousInput += (', ' + this.input.toString())
      }
      this.input = null
    },
    onEnter: function () {
      if (!this.disableInput && this.input != null) {
        this.output()
      }
    }
  }
}

Vue.component('gamethree', gamethree)
