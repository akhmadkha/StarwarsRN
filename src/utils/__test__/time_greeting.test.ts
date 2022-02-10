import timeGreeting from "../time_greeting"

test('if ', () => {
  expect(timeGreeting() === ("Good Morning" || "Good Afternoon" || "Go eat lunch!"))
})
