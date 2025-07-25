
export const sampleChats=[{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "12345",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: { count: 2 },
    members: ["1","2"],
    index: 0,
  }
,{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Jane Smith",
    _id: "67890",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 1 },
    members: ["2","3"],
    index: 1,
  },
{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar2.png",

    ],
    name: "Group Chat",
    _id: "11223",
    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: { count: 0 },
    members: ["1","2","3"],
    index: 2,
  }    
]

export const sampleUsers =[
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Jane Smith",
    _id: "1",
  }
  ,
  {
     avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Jane Smith",
    _id: "2",
  }
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png", // not an array
      name: "Jane Smith",
    },
    _id: "67890",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jane Smith",
    },
    _id: "12345",
  },
];
