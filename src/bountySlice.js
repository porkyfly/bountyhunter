import { createSlice } from '@reduxjs/toolkit'

export const bountySlice = createSlice({
    name: 'bounty',
    initialState: {
      bounties:
        [
          {
            mission: "buy me a mcrib",
            amount: 420,
            lat: 38.8824,
            long: -77.1078,
            expiry: 2
          },
          {
            mission: "let me pee in your bathroom",
            amount: 5,
            lat: 38.8844,
            long: -77.1072,
            expiry: 5
          },
          {
            mission: "take a pic of the street parking situation",
            amount: 2,
            lat: 38.8874,
            long: -77.1062,
            expiry: 15
          }
        ]
    },
    reducers: {
      addBounty: (state, action) => {
        state.bounties.push(action.payload)
      },
    },
  })


  export const { addBounty } = bountySlice.actions

  export default bountySlice.reducer
  