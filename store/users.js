export const state = () => ({
  users: [
    {
      id: 1,
      name: 'dwdawdwa',
      surname: 'rrgtrttrg'
    },
    {
      id: 2,
      name: 'dwdawdwa',
      surname: 'rrgtrttrg'
    },
    {
      id: 3,
      name: 'dwdawdwa',
      surname: 'rrgtrttrg'
    },
    {
      id: 4,
      name: 'dwdawdwa',
      surname: 'rrgtrttrg'
    },
    {
      id: 5,
      name: 'dwdawdwa',
      surname: 'rrgtrttrg'
    }
  ]
})

export const getters = {
  getUsers: store => store.users
}
