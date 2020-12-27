const firebaseDB = require('../firebaseDB');
const db = firebaseDB.firestore();

//Models DB
const User = require('../Models/User');

//*****Function Query Database*****

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        await db.collection('users').doc().set(data);
        res.send('Add to DB success');
    }
    catch (error){
        res.status(400).send(error.massage);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const user = await db.collection('users');
        const usersdata = await user.get();
        const userArray = [];
        let userObject = {};
        if(usersdata.empty)
        {
            res.status(404).send("No User in record")
        }else{
            usersdata.docs.forEach(doc => {
                // console.log(doc.id)
                // console.log(doc.data());
                
                //push into array
                const user = new User(
                    doc.id,
                    doc.data().firstname,
                    doc.data().lastname
                )
                console.log(user)
                userArray.push(user);
                // userObject.assign(user);
                // userObject.id = doc.id,
                // userObject.firstname = doc.data().firstname,
                // userObject.lastname = doc.data().lastname
            });
            // console.log(userObject.pretty());
            
            res.send(userArray);
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addUser,
    getAllUser
}