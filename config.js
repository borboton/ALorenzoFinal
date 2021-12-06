export default {
    fileSystem: {
        path: './DB/'
    },
    mongodb: {        
        uri: 'mongodb+srv://coderhouse:coderhouse1234@cluster0.wduji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        db: "coderhouse"
    },
    firebase: {
        
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './DB/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: '1234',
            database: 'productos'
        }
    }
}