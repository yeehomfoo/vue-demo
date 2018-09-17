import {
  moduleTest
} from '@/store/index'

const {
  mutations
} = moduleTest
const {
  increment
} = mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = {
      count: 0
    }
    increment(state)
    expect(state.count).to.equal(1)
  })
})
