export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let num = getRandomInt(2024, 2030)
console.log("🚀 ~ file: random.js ~ line 7 ~ num", num)

export function getRandomInArr(arr) {
    let num = getRandomInt(0, arr.length - 1)
    return arr[num]
}

function futureDate(names) {
    let getRandomMonth = getRandomInt(0, 11)
    let getRandomDay = getRandomInt(1, 25)
    return new Date(2022, getRandomMonth, getRandomDay)
}
let words = []
let emails = ["joelw@optonline.net", "kspiteri@outlook.com", "garyjb@att.net", "jbryan@outlook.com", "jigsaw@gmail.com", "cgreuter@icloud.com", "euice@sbcglobal.net", "burns@att.net", "sabren@icloud.com", "kidehen@me.com", "arachne@mac.com"]

let lorem = ["It did not matter if the old way between them was gone and a new way would have to be found; it was a comfort to sit next to him,  the kind of comfort only possible between two people who had been in each other’s earliest memories.", "When their eyes met he grinned and she knew: I chose this. I chose him. This is my life. I did not think it would be possible for me. But it is. It will be.", "What is it about caring for another,  feeling love,  feeling affection,  at times desire,  that makes one shy?", "What is a person,  if not the marks they leave behind?", "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", "Books,  she has found,  are a way to live a thousand lives—or to find strength in a very long one.", "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", "He hasn’t learned yet how to take up space,  but she’s sure he will.", "Live long enough,  and you learn how to read a person. To ease them open like a book,  some passages underlined and others hidden between the lines.", "Whatever this is,  she knows it will not last. She has lived too long to think it chance,  been cursed too long to think it fate.", "Whatever this is,  she knows it will not last. She has lived too long to think it chance,  been cursed too long to think it fate.", "Really my problem is that I’m annoyed at everyone else for not having all the answers,  when I also have none. And who am I to ask for humility and openness from other people? What have I ever given the world to ask so much in return?", "For me I think it’s more that I fall in love very intensely. And I can never know in advance who it’s going to be,  whether they’ll be a man or woman,  or anything else about them.", "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", "Maybe we’re just born to love and worry about the people we know,  and to go on loving and worrying even when there are more important things we should be doing.", "And just from my perspective,  whenever I get really lonely,  you’re the person I call. Because you have a soothing effect on me.", "What if these things just rise and recede naturally,  like tides,  while the meaning of life remains the same always—just to live and be with other people?", "I didn’t know that there was a worldwide depression and that madness and sorrow and fear were almost everywhere.", "Love was why we fought all our battles. Love was what we lived and died for. Love was what we dreamed of as we slept. Love was the air we wanted to breathe in when we woke to greet the day. Love was a torch you carried to lead you out of darkness. Love took you out of exile and carried you to a country called Belonging.", "I would never show him that I was afraid. That’s what I told myself. But I knew I couldn’t keep that promise.", "To listen to her voice was to listen to her love."]

let images = ["https://cdn.cnn.com/cnnnext/dam/assets/200805163718-01-best-lakes-california.jpg", "https://i.picsum.photos/id/796/200/300.jpg?hmac=tubV2vVJFyJ_KIav5eG2iKDmpKoctbrojgEFaflH_l4", "https://upload.wikimedia.org/wikipedia/commons/b/be/Frukost_under_stora_bj%C3%B6rken_av_Carl_Larsson_1896.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blomsterf%C3%B6nstret_av_Carl_Larsson_1894.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/67/Carl_Larsson_-_S%C3%B6derk%C3%A5kar_1885.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Carl_Larsson_-_a.jpg", "https://ordrupgaard.dk/wp-content/uploads/2014/01/brevskrivning1.jpg"]


let get = getRandomInArr(emails)
console.log(get)