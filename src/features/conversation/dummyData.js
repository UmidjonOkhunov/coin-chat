export const conversations = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        senderId: 1,
        senderName: "frapuchino",
        receiverId: 2,
        receiverName: "americano",
        message: "Hello, there!",
        createdAt: new Date().getTime(),
      },
      {
        id: 2,
        senderId: 1,
        senderName: "frapuchino",
        receiverId: 2,
        receiverName: "americano",
        message: "I saw your amazing collection of Bored Ape NFTs",
        createdAt: new Date().getTime(),
      },
      {
        id: 3,
        senderId: 2,
        senderName: "americano",
        receiverId: 1,
        receiverName: "frapuchino",
        message: "Yeah, thanks! I have a big collection indeed.",
        createdAt: new Date().getTime(),
      },
    ],
  },
  {
    id: 2,
    messages: [
      {
        id: 1,
        senderId: 3,
        senderName: "Carl",
        receiverId: 4,
        receiverName: "Ted",
        message: "Hi, there!",
        createdAt: new Date().getTime(),
      },
      {
        id: 2,
        senderId: 3,
        senderName: "Carl",
        receiverId: 4,
        receiverName: "Ted",
        message: "I saw your amazing collection of Bored Ape NFTs",
        createdAt: new Date().getTime(),
      },
      {
        id: 3,
        senderId: 4,
        senderName: "Ted",
        receiverId: 3,
        receiverName: "Carl",
        message: "Bye",
        createdAt: new Date().getTime(),
      },
    ],
  },
];

// type Message struct {
// 	Id           int64
// 	SenderId     int64
// 	SenderName   string
// 	ReceiverId   int64
// 	ReceiverName string
// 	CreatedAt    time.Time
// }

export const tempMessages = [
  {
    id: 1,
    author: "apple",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    timestamp: new Date().getTime(),
  },
  {
    id: 2,
    author: "orange",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    timestamp: new Date().getTime(),
  },
  {
    id: 3,
    author: "orange",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    timestamp: new Date().getTime(),
  },
  {
    id: 4,
    author: "apple",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    timestamp: new Date().getTime(),
  },
  {
    id: 5,
    author: "apple",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    timestamp: new Date().getTime(),
  },
  {
    id: 6,
    author: "apple",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    timestamp: new Date().getTime(),
  },
  {
    id: 7,
    author: "orange",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    timestamp: new Date().getTime(),
  },
  {
    id: 8,
    author: "orange",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    timestamp: new Date().getTime(),
  },
  {
    id: 9,
    author: "apple",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    timestamp: new Date().getTime(),
  },
  {
    id: 10,
    author: "orange",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    timestamp: new Date().getTime(),
  },
];
