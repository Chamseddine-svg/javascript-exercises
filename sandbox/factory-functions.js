function user(name){
    this.name = name
    this.userName = name + '@User'
}

const user1 = user('alex')
console.log(user1)