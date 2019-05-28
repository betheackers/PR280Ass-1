/* global Vue */
/* eslint eqeqeq: ["error", "always", {"null": "ignore"}] */
var gamefour = {
  template: `
  <div>
    <h2>Game 4: Count Double</h2>
    <p>Please enter a series of numbers. End with a rogue of 999. The output will show how many times the next integer was twice the number of the previous number.
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
    <p>Double count is:
      {{ counter }}
    </p>
    <p> Data entered:
      {{ oldInput }}
    </p>
  </div>`,
  data: function () {
    return {
      input: null,
      previousInput: null,
      counter: null,
      rogue: 999,
      nextNumber: null,
      oldInput: ''
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
      this.input = this.nextNumber * 1
      if (this.input === this.rogue) {
        this.output()
      }
    },
    output () {
      if (this.input === (this.previousInput * 2)) { 
        this.countDouble()
      }
      if (this.input === this.rogue) {
        console.log('rogue')
      }
      if (this.oldInput === '') {
        this.oldInput = this.input.toString()
      } else {
        this.oldInput += (', ' + this.input.toString())
      }
      this.previousInput = this.input
      this.input = null
    },
    onEnter: function () {
      if (!this.disableInput && this.input !== null) {
        this.output()
        this.nextNumber = null
      }
    },
    countDouble () {
      ++this.counter
    }
  }
}

Vue.component('gamefour', gamefour)
