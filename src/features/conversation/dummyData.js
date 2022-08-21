export const conversations = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        senderId: 3,
        senderName: "Umidjon",
        receiverId: 2,
        receiverName: "frapuchino",
        message: "Hello, there!",
        createdAt: new Date().getTime(),
      },
      {
        id: 2,
        senderId: 3,
        senderName: "Umidjon",
        receiverId: 2,
        receiverName: "frapuchino",
        message: "I saw your amazing collection of Bored Ape NFTs",
        createdAt: new Date().getTime(),
      },
      {
        id: 3,
        senderId: 2,
        senderName: "frapuchino",
        receiverId: 3,
        receiverName: "Umidjon",
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
        senderId: 1,
        senderName: "Carl",
        receiverId: 3,
        receiverName: "Umidjon",
        message: "Hi, there!",
        createdAt: new Date().getTime(),
      },
      {
        id: 2,
        senderId: 1,
        senderName: "Carl",
        receiverId: 3,
        receiverName: "Umidjon",
        message: "I saw your amazing collection of Bored Ape NFTs",
        createdAt: new Date().getTime(),
      },
      {
        id: 3,
        senderId: 3,
        senderName: "Umidjon",
        receiverId: 1,
        receiverName: "Carl",
        message: "Not Interested",
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
