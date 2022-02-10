import groupArrayItem from "../group_array_item"


test('return array with group based from per page number', () => {
  let test = [1,2,3,4,5,6]
  expect(groupArrayItem({data:test, perPage: 2}))
})
