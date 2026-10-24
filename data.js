
const storyData = {
  messages: [
    {
      name: "Abelio Lumi",
      preview: "u still awake?",
      lastMessageTime: "Yesterday 11:42 PM",
      profilePhoto: "https://i.pinimg.com/736x/bd/ee/0b/bdee0b892fe5198126efa34f34629744.jpg",
      chat: [
  { sender: "Malik", text: "Abel" },
  { sender: "Malik", text: "Ini benar gak aku makenya?" },
  { sender: "Malik", text: "Aku sudah pake." },
  { sender: "Malik", image: "Foto Malik/malik 1.jpg" },
  { sender: "Malik", text: "Aku pakenya berapa lama ya Abel?" },
  { sender: "Malik", text: "Boleh aku bawa tidur?" },
  { sender: "Malik", text: "Abel kamu udah tidur ya?" },
  {
    sender: "Malik",
    text: "Kamu bilang jangan lepas sampe kamu bilang lepas, I’ll wait until you tell me to take it off ya."
  },
  { sender: "Malik", text: "Mimpi indah, sayang." },

  { type: "date", text: "13 June 2026 at 09:00" },

  { sender: "Abel", text: "MALIK AKU KETIDURAN" },
  { sender: "Abel", text: "MAAF MAAF YA AMPUN MAAF" },
  { sender: "Abel", text: "LEPAS AJA. LEPAS SEKARANG MALIK" },
  { sender: "Abel", text: "KAMU BAWA TIDUR YA??" },
  { sender: "Abel", text: "Malik belum bangun ya :(" },

  { sender: "Malik", text: "Morning, Abelio." },
  { sender: "Abel", text: "Maaf Malik aku ketiduran :(" },

  { sender: "Malik", text: "No worries, sayang. Aku bawa tidur sih. I don’t know where it went though. Pretty sure it came off." },
  { sender: "Abel", text: "Gatel gak mukanya? Iritasi gak?" },
  { sender: "Malik", text: "No, it’s fine. I checked my face earlier, and it looks fine." },
  { sender: "Abel", text: "Huh aku panik tadi. Aku takut muka kamu kenapa-kenapa" },

  { sender: "Malik", text: "Oh, but there’s just one problem." },
  { sender: "Abel", text: "APA???" },
  { sender: "Malik", text: "I still haven’t seen your face, you know. How am I supposed to live with that?" },
  { sender: "Abel", text: "ISH JANGAN BEGITU" },
  { sender: "Abel", text: "Malu :(" },
  { sender: "Malik", text: "Hahahaha. Nanti ketemu ya. Mau?" },
  { sender: "Abel", text: "MAUUUUU" },

  { type: "date", text: "15 June 2026 at 13:10" },
{ sender: "Malik", text: "Abel, Can I ask you something?" },
{ sender: "Abel", text: "Kenapa? Kamu ngelakuin apa?" },
{ sender: "Malik", text: "Nothing. But, you’re in a good mood right now, right?" },
{ sender: "Abel", text: "WHY?????" },
{ sender: "Malik", text: "Jawab dulu, please. Yes or no?" },
{ sender: "Abel", text: "Yesss" },
{ sender: "Malik", image: "Foto Malik/malik 2.jpg" },
{
  sender: "Malik",
  text: "Jadi tadi aku sama Jeje lewat skatepark, kan? Terus ada bocil bilang, 'Cobain, Kak. Kakak kayaknya jago.' I mean, the kid believed in me. Who was I to let him down, right? Ya aku coba. Tapi lalu aku nyusruk. HEHEHE."
},
{ sender: "Abel", text: "Ketawa gitu emang ada yang lucu?" },
{ sender: "Malik", text: "Gak ada yang lucu :(" },
{ sender: "Abel", text: "Ok" },
{ sender: "Malik", text: "Maaf :(" },
{ sender: "Abel", text: "Gak usah ke sini. Main aja skateboard lagi. Sampe berdarah semuka-muka" },
{ sender: "Malik", text: "Yah jangan dong Abel :(" },
{ sender: "Malik", text: "Lemes aku kalo gak ketemu kamu." },
{ sender: "Malik", text: "Maaf Abel :(" },
{ sender: "Malik", text: "Promise I won't try anything reckless until I've got the skills to back it up." },
{ sender: "Abel", text: "👍" },
{ sender: "Malik", text: "Abel sakit :(" },
{ sender: "Malik", text: "Mau diobatin :(" },
{ sender: "Malik", text: "Please, sayang :(" },
{ sender: "Abel", text: "Jangan disentuh lukanya" },
{ sender: "Malik", text: "Iya gak disentuh :(" },
{ sender: "Malik", text: "Jadi aku harus kemana sekarang ya?" },
{ sender: "Malik", text: "Abis nyusruk dan gak ada tempat pulang." },
{ sender: "Abel", text: "HHHHHHHHHH AKU MASIH MARAH" },
{ sender: "Abel", text: "TAPI CEPET KE RUMAH" },
{ sender: "Abel", text: "AKU OBATIN" },
{ sender: "Malik", text: "Sayang. Cantikku. Makasih, sayang." },
{ sender: "Malik", text: "Sayang diread doang :(" },
{ sender: "Abel", text: "Ya" },

{ type: "date", text: "16 June 2026 at 23:30" },

{ sender: "Abel", text: "Malik kamu masih bangun kah?" },
{ sender: "Abel", text: "Malik jangan marah ya. Tapi tadi kan aku tiba-tiba laper, mau beli bakso. Terus bakso yang deket rumah lagi gak buka, jadi aku mau beli yang agak jauh. Pinjem motor Nara. Tapi Nara gak ikut karena udah tidur. Terus motornya mogok. Aku bingung ini gimana 😭 Malik, is there any chance you could come here?" },
{ sender: "Malik", type: "call", status: "outgoing", text: "Panggilan suara" },
{ sender: "Abel", type: "call", status: "rejected", text: "Panggilan ditolak" },
{ sender: "Malik", text: "???" },
{ sender: "Malik", text: "Kenapa direject?" },
{ sender: "Abel", text: "Chat aja. Takut :(" },
{ sender: "Malik", text: "Aku udah di mobil. Nanti kamu bawa mobil aku. Biar motor Nara aku yang urus." },
{ sender: "Abel", text: "Kok gitu. Gak mau :(" },
{ sender: "Malik", text: "Nunggu berapa lama kamu di pinggir jalan sampe baru berani ngechat aku?" },
{ sender: "Malik", text: "I told you before, jam berapa pun kamu hubungin aku, I'll pick up." },
{ sender: "Malik", text: "This is just reckless, Abel. If you wanna go by yourself, fine. But at least let me know where you are. I just wanna make sure kamu sampai tujuan dan pulang ke rumah dengan selamat. That's all I ask." },
{ sender: "Malik", text: "I've never had a problem with you being independent. But you can't just leave me out of the loop when something like this happens." },
{ sender: "Malik", text: "If something goes wrong, you tell me. ASAP." },
{ sender: "Abel", text: "Malik, maaf :(" },
{ sender: "Abel", text: "Abel minta maaf, Malik :(" },
{ sender: "Malik", text: "We'll talk about this later. Share ur location." },
{ sender: "Abel", text: "Maafin dulu." },
{ sender: "Malik", text: "I've got no time for this right now. Later. Shareloc." },
{ sender: "Abel", text: "Sayangnya mana?" },
{ sender: "Malik", text: "You really drive me insane, don't you?" },
{ sender: "Abel", text: "Sayangnya mana? :(" },
{ sender: "Malik", text: "Shareloc, sayang." },
{ sender: "Abel", text: "Sayang Malik" },
{ sender: "Malik", text: "Ya." },
{ sender: "Abel", text: ":(" },

{ type: "date", text: "17 June 2026 at 06:30" },
{ sender: "Abel", text: "Malik udah bangun?" },
{ sender: "Malik", text: "Udah." },
{ sender: "Abel", text: "Singkat-singkat :(" },
{ sender: "Abel", text: "Masih marah?" },
{ sender: "Malik", text: "Hahahaha, no. Ini lagi nyari foto orang lucu." },
{ sender: "Abel", text: "SIAPA?? SIAPA YANG LUCU?" },
{ sender: "Malik", image: "Foto Malik/abel 5.jpg" },
{ sender: "Malik", text: "Here you go. Dari kemarin gak berhenti bawel, jelasin dari A sampai Z kenapa dia gak mau ngerepotin Malik." },
{ sender: "Abel", text: "ISH MALAS AH." },
{ sender: "Malik", text: "HAHAHAHAHAHAHA." },
{ sender: "Abel", text: "Tapi aku bener-bener minta maaf." },
{ sender: "Malik", text: "I know, sayang." },
{ sender: "Malik", text: "But one thing you should know, kamu gak pernah sekalipun ngerepotin aku. I want to be there for you. There’s a fundamental difference between the two." },
{ sender: "Malik", text: "Aku tau kamu udah terbiasa ngurus semuanya sendiri. Kalau ada masalah, kamu pasti langsung mikir gimana caranya nyelesain itu tanpa harus minta bantuan siapa-siapa. And I know you're capable of doing that. Aku gak pernah meragukan kemampuan kamu untuk itu." },
{ sender: "Malik", text: "But you don't always have to do everything on your own anymore, sayang. You have me now." },
{ sender: "Malik", text: "Kalau kamu mau pergi ke mana-mana sendiri, go ahead. Aku gak akan ngelarang kamu. Kalau kamu mau nyoba sesuatu sendiri, I'll be the first person to cheer you on. Tapi kalau ternyata ada yang gak berjalan sesuai rencana, I want you to know that you can come to me, too." },
{ sender: "Malik", text: "Aku gak mau ambil kemandirian kamu, Abel. I just want you to know that I’m always here, ready to be part of your world whenever you’ll let me." },
{ sender: "Malik", text: "Aku cuma mau kamu inget kalau sekarang ada aku juga. You can stand on your own and still lean on me when you need to. One doesn't have to come at the expense of the other, Abel. There's room for both." },
{ sender: "Abel", text: "Sayang Malik." },
{ sender: "Malik", text: "I know, sayang. I know." },
{ sender: "Abel", text: "Nanti pas ketemu aku peluk dan cium" },
{ sender: "Malik", text: "👀" },
{ sender: "Abel", text: "PIPINYAAAAA" },
{ sender: "Malik", text: "I didn't say anything hahahahaha." },
  
]
    },
    {
    name: "Jeje",
    preview: "",
    lastMessageTime: "Today 9:15 AM",
    profilePhoto: "https://i.pinimg.com/736x/02/22/f5/0222f57ec493d5c6b114594b625a7628.jpg",
    chat: [
  { sender: "Jeje", text: "Salam Ganesha!!" },
  { sender: "Malik", text: "Bacot ye." },
  { sender: "Jeje", text: "HAHAHAHAH. Di mana bro?" },
  { sender: "Malik", text: "Blok m." },
  { sender: "Jeje", text: "Ngapain anying panas-panas ke blok m" },
  { sender: "Malik", text: "Survey." },
  { sender: "Jeje", text: "Survey apa nyet?" },
  { sender: "Malik", text: "Something important." },
  { sender: "Jeje", text: "MAU BELI RUMAH YA LU?" },
  { sender: "Malik", text: "Kagak kocak." },
  { sender: "Jeje", text: "Nobar F1 yuk" },
  { sender: "Malik", text: "Di mana?" },
  { sender: "Jeje", text: "Citos" },
  { sender: "Malik", text: "Ya boleh. Abis ini gua ke rumah lu dah." },
  { sender: "Malik", text: "Bilang aja lu kangen Je. Pake segala salam ganesha lu." },
  { sender: "Jeje", text: "PRET" }
]
},
  {
    name: "Mares",
    preview: "",
    lastMessageTime: "Monday 8:30 PM",
    profilePhoto: "https://i.pinimg.com/1200x/10/3e/98/103e98067b0fc320fc5aa5184f81ec31.jpg",
    chat: [
  { sender: "Mares", text: "Eh, kalau ada orang yang marah setiap kali lu gak nge-chat dia, itu kenapa?" },
  { sender: "Malik", text: "Hah?" },
  { sender: "Mares", text: "Kalau orang itu selalu ngintilin gua, artinya apa? Kayak, misalnya nih, gua udah bilang jangan ganggu gua dulu, tapi dia malah neleponin gua mulu." },
  { sender: "Malik", text: "You sure you told him you were busy, or did you just leave him on read without saying anything?" },
  { sender: "Mares", text: "JANGAN NANYA BALIK. ORANG GUA LAGI NANYA." },
  { sender: "Mares", text: "GA MOOD GUA AH." }
]
},
  {
    name: "Papi",
    preview: "",
    lastMessageTime: "Yesterday 7:20 PM",
    profilePhoto: "https://i.pinimg.com/1200x/8b/f3/c5/8bf3c5bda2dfb985bc781db59e9fb61a.jpg",
    chat: [
  { sender: "Papi", text: "You ate yet?" },
  { sender: "Malik", text: "Not yet pi." },
  { sender: "Papi", text: "Go eat first, don't skip dinner" },
  { sender: "Malik", text: "I will in a bit." },
  { sender: "Papi", text: "Now, Malik." },
  { sender: "Malik", text: "OKAY PI. YOU EAT TOO." },

  { sender: "Papi", text: "Later" },
  { sender: "Malik", text: "NOW." },
  { sender: "Papi", text: "HAHAHAHAHHA" },
  { sender: "Malik", text: "Practice what you preach, papi." },

  { sender: "Papi", text: "Ya boy santai aja boyyyyy" },
  { sender: "Papi", text: "Anyway, mami kamu cantik banget ya" },
  { sender: "Malik", text: "Iya heran Malik juga. Kok mau-maunya mami sama papi?" },

  { sender: "Papi", text: "HAVE YOU SEEN ME IN MY PRIME? BACK IN COLLEGE? MENNNN, I WAS THE CATCH. THE FACE, THE CHARM, THE HAIR? I HAD IT ALL." },
  { sender: "Malik", text: "Yeah sure." }
]
  },
  {
    name: "Mami",
    preview: "",
    lastMessageTime: "Today 8:00 AM",
    profilePhoto: "https://i.pinimg.com/1200x/4a/0c/9d/4a0c9d03888eddca24f98d46192b07ef.jpg",
    chat: [
  { sender: "Mami", text: "have you eaten, sayang?" },
  { sender: "Malik", text: "Morning mi, not yet." },
  { sender: "Mami", text: "please eat breakfast first" },
  { sender: "Malik", text: "I will, promise." },
  { sender: "Mami", text: "don't forget to take care of yourself 🤍" },
  { sender: "Malik", text: "Love you mi🤍" },
  { sender: "Mami", text: "love you more, abang malik" },

  { sender: "Mami", text: "kok diread doang sih abang? Mami belum selesai ngomong" },
  { sender: "Malik", text: "Hahahaha. What is it Mi?" },

  { sender: "Mami", text: "hehehehe mami cuma bilang mami suka sama Abel. He's such a polite young man, and awfully cute too, I must say" },

  { sender: "Mami", text: "i just want to squish his cheeks 😭 Abel minta maaf mulu karena gak enak kalau Mami ajak pergi. He even offered to pay me back. Like, sweetheart, don't worry about that. Uang yang Mami pakai juga uangnya Papi kok 😭🤍" },

  { sender: "Malik", text: "I know you're perceptive, Mi. What I mean is, when you want to give Abel something, you have to know when it's okay to offer and when to take a step back kalau Abel udah nolak berkali-kali. Don't get me wrong, Mi, I know you mean well, and I know you just want to make him feel loved. But sometimes, the way someone receives affection is different from the way we intend to give it." },

  { sender: "Malik", text: "Abel tuh anaknya gak enakan, Mi. He'll keep apologizing or try to make it up to you because he doesn't want to feel like he's inconveniencing anyone, even when no one actually thinks that way. So kalau Mami terus insist, even when he says no, he might feel like he has to accept just to avoid disappointing you. And I don't want him to feel that way around us." },

  { sender: "Malik", text: "It's not that he doesn't appreciate what you do for him. I know he does, probably more than he lets on. But I want him to feel like he can say no without feeling guilty about it, too. That he can be comfortable around you without constantly worrying about whether he owes you something in return." },

  { sender: "Malik", text: "I know the little gifts and all the things you do come from a place of love, Mi, and I know you don't mind spending the money. But I don't want something that's supposed to make him feel loved to end up overwhelming him instead." },

  { sender: "Mami", text: "Oh, look at the tiger coming out. Someone's feeling protective, huh?" },
  { sender: "Malik", text: "Need to make sure my boy's being treated right, don't I?" },
  { sender: "Mami", text: "Alright, alright, boss man. We'll be careful with your precious Abel" }
]
  }
  ],

  notes: [],
  calendar: [],
  contacts: [],
  photos: [
  {
    src: "https://i.pinimg.com/1200x/17/f4/c1/17f4c1681123c9933ffbba21350900c0.jpg",
    caption: "Malik"
  }
],
  mail: [],
  safari: [],
  callHistory: []
};

console.log("Story data loaded:", storyData);
