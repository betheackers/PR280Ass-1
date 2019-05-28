/* global Vue */
/* eslint eqeqeq: ["error", "always", {"null": "ignore"}] */
var gamefive = {
  template: `
  <div>
    <h2>Game 5: Sequence</h2>
    <p>Please enter a series of numbers. End with a rogue of 999. The output will say "Series in Sequence" if the series is in ascending order or the message "Series not in sequence" if the series isn't. If the adjacent values are equal, the series is still in ascending order.
    </p>
    <input type="number"
      id="enterChar"
      maxlength="3"
      v-model="nextNumber"
      :disabled=disableInput
       autocomplete="off">
    <br><br>
    <input
      type="button"
      value="Enter"
      @click="parseInput">
    <br><br>
    <div v-show="end === true">
      <div v-if="sequenceNumbers === true">
        Numbers are in sequence
      </div>
      <div v-else>
        Numbers not in sequence
      </div>
    </div>
  </div>`,
  data: function () {
    return {
      input: null,
      previousInput: [],
      rogue: 999,
      nextNumber: null,
      sequenceNumbers: false,
      end: false
    }
  },
  computed: {
    disableInput () {
      if (this.nextNumber === null) {
        return false
      }
      return ((this.nextNumber.toString()) === (this.rogue.toString()))
    }

  },
  methods: {
    addToArray () {
      this.previousInput.push(this.input)
      this.nextNumber = null
    },
    parseInput: function (event) {
      this.input = this.nextNumber * 1
      if (this.input !== this.rogue) {
        this.addToArray()
      } else {
        console.log('the rogue')
        // this.input = null
        this.nextNumber = null
        this.output()
      }
    },
    output () {
      this.checkSequence()
      this.end = true
    },
    onEnter: function () {
      if (!this.disableInput && this.input !== null) {
        this.nextNumber = null
      }
    },
    checkSequence () {
      let array = this.previousInput
      for (var i = 0; i < array.length; i++) {
        if (i !== 0) {
          if (array[i] >= (array[i - 1])) {
            this.sequenceNumbers = true
          } else {
            this.sequenceNumbers = false
            break
          }
        }
      }
      console.log(this.sequenceNumbers)
    }
  }
}

Vue.component('gamefive', gamefive)
