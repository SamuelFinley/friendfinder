let friendData = require("../data/friends");

module.exports = class apistuff {
    getting(app) {
            app.get("/api/friends", function(req, res) {
                res.json(friendData);
              });
    }

    posting(app) {
        let friends = friendData;
        let arr = [];
        let friendly = {
            name: '',
            photo: ''
        }
        app.post("/api/friends", function (req, res) {
            const sum = req.body.survey.reduce((total, amount) => Number(total) + Number(amount));
            console.log(sum)
            friendData.forEach(x => {
                arr.push(parseInt(Math.abs(x.survey.reduce((total, amount) => Number(total) + Number(amount)) - sum)));
            });
            let friend = friendData[arr.indexOf(Math.min.apply(Math, arr))];
            friendly.name = friend.name;
            friendly.photo = friend.photo;
            friendData.push(req.body);
            res.json(friendly);
        });
    }
}