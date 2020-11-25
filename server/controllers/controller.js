const fruits = ['apple', 'banana', 'cherries', 'kiwi', 'grapefruit', 'grapes']

module.exports = {
    getFruits: (req, res) => {
        res.status(200).send(fruits)
    },
    failedReq: (req, res) => {
        // res.sendStatus(200) // sendStatus used to close connection without sending any data
        res.status(200).send('Hey you reached the end of the road');
    }
}