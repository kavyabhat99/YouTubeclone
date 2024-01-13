let nameList = [
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Deeper",
    "Deepest",
    "Mine",
    "Your",
    "Worst",
    "Enemy",
    "Hostile",
    "Force",
    "Video",
    "Game",
    "Donkey",
    "Mule",
    "Colt",
    "Cult",
    "Cultist",
    "Magnum",
    "Gun",
    "Assault",
    "Recon",
    "Trap",
    "Trapper",
    "Redeem",
    "Code",
    "Script",
    "Writer",
    "Near",
    "Close",
    "Open",
    "Cube",
    "Circle",
    "Geo",
    "Genome",
    "Germ",
    "Spaz",
    "Shot",
    "Echo",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
  ];
  let usericon =[
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "https://eu.ui-avatars.com/api/?name=John+Doe&size=250",
    "https://avatar.iran.liara.run/public/boy?username=Ash",
    "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk",
    "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    "https://placebeard.it/250/250",
    "https://dummyimage.com/300.png/09f/fff&text=Ash+Allen",
    "https://robohash.org/mail@ashallendesign.co.uk"
  ]
  let complimentList = [
    `Great🚀🚀🚀`,
    `Awsome Job 😁😁🤝♥️`,
    `I bet you to smile.♥️`,
    "😂😊😁😂",
    `♥️♥️♥️♥️♥️♥️`,
    `😁😁😁😂😃`,
    `I appreciate you♥️`,
    `🤯🤯🤯`,
    `You light up the room 😁`,
    `😊😊😊`,
    `Nice 😁♥️`,
    `omgg🫨🫨🫨🫨`,
    `♥️🫨😊`,
  ];
  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function generateRandomCompliment() {
    return complimentList[Math.floor(Math.random() * complimentList.length)];
  }
  export function generateRandomUsericon() {
    return usericon[Math.floor(Math.random() * usericon.length)];
  }
  
  