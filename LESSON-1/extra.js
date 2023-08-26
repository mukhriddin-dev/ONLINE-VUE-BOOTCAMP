let app = "Telegram";

let social = ['facebook', 'twitter', 'telegram', 'instgram']



function removeEl() {
    social.pop();
    console.log(this)

}


let obj = {
    color: "red",
    getColor: function () {
        console.log(this.color)
    },
};