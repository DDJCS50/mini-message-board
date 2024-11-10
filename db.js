const messages = [
  {
    text: "Hello from John",
    user: "John",
    added: new Date(),
    details: "I just wanted to say hello first",
    index: 1,
  },
  {
    text: "Hello from Jane",
    user: "Jane",
    added: new Date(),
    details: "I just wanted to say hello second",
    index: 2,
  },
];

async function getMessageByIndex(index) {
  let chosen = messages.find((message) => message.index === index);
  console.log(chosen);
  return chosen;
}

module.exports = { messages, getMessageByIndex };
