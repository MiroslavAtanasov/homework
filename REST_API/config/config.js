module.exports = {
    port: process.env.PORT || 3333,
    databaseUrl: `mongodb+srv://user:softuni-password@softuni-l24ab.mongodb.net/bikes?retryWrites=true&w=majority`,
    defaultPrice: process.env.PRICE,
}