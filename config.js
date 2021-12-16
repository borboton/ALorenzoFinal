export default {
    fileSystem: {
        path: './DB/'
    },
    mongodb: {        
        uri: 'mongodb+srv://coderhouse:coderhouse1234@cluster0.wduji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        db: "coderhouse"
    },
    firebase: {
        "type": "service_account",
        "project_id": "coderhouse-f9da5",
        "private_key_id": "cb5d0a12324128d68ecc808909bf80d60cb743ef",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDQU3l1whrLELFh\nQRELO/Hx/PFQ+wpnAowqSnXKRSUcTJQkjGMZSL4wJfv9exJNrhEwIoz6Y9u4pIRa\nhmtEe5TKTdD6ffreN5hXoFmk5nJF66Bph+Mq688wp1X10R8+fiFSfo9Qlaibe2M5\nbanGZ5gxh3vAjLNDtCTeQcKL0L+PEsLDbpN5rHR+J65QFkRA8SzJN+NsKo9Su/TC\nytU3fw4nqI3nLV3tL2laXKu9x/IE3usxYbQgTk8iSoOyHIbxHJF0Ap+D6X5Zu1gD\nAXK/Pz/CS5l1e2DWEaF9eSUNqGKo6MCzEe3d3qDyqnbycNTICLCHoI4wM9jfXtk3\nByw444W5AgMBAAECggEACiYi6ux5oy5tQcxqcOZq90vIEtakD1glrXLCsce0EuCd\nL/mh40uyrkRPdi4eemfSQQrR3Onr/J8RLprRU30ExuVLGsTz6YsCUjSG4XxzkTn1\nLub2l3L0/U0NqEPXlpMM+wic4UNlOyvj7dqMlJSb6r/LtNn16sS2Lhi8ilSxXF4q\nVPBTOC6hOmhXyGCOj430YO+DASN5KyUva2K7iqOXAfRy0qyOg+xs5QbwLci49PIo\nJYxHFx7wFFM0zgKyzhEZ0pgQy37ka3Nu3PAkGzEeZcM8vJsPkbvIi2qnYU3OHZAc\nlU0l3AVIDZeNWgWoQn2WlSHhxxEsmj5P1emnXdiJgQKBgQDysOw2AjWeBJtQA9wK\nm6V5m5tXV0gYaYcqhqxlqnsyDU8Z3k/HpBkKTkp3l1yCJI4eOqrAitPAdKUrOJYh\ntPbqQU+WFAFMi831POk4JHcSKiWkCm1+iges84oJEpeeIEFlwvestuvvj6DHUrFe\nhCGBK4Xb/RExP9E5FP0TCNzn+QKBgQDbwBwpMAjQ0amKCgzjLk4M80nDshAAyzrg\n66oZFdCC/1oNaY3kLv42Cb08FxzmWebp0A2YxCmJqnnRDPBPZ34pmQ9qQGeHoaOD\nawcqrpGbeQboiqRZ0wQ4UP03r9caf8aDnfU83nPW8SvjVdHXUDP+QDlVLE3CRSzh\nSFjavwR7wQKBgH4BhDMqhIIt7CHoTxgm5gy00TvQ8nrSV76pu9rxYBOFu3s35P5H\n4kRqj9l1+i8MIcnqNfvQWM9FAPjm4XRQzB6mmFbYvi/rKp1Y6dIfhL8mqPJ6A42+\nxutya0n4oEYWgz39s7C2LNvuG9FByxvCyM6TNWYaCBIlC1Fy5085u9CpAoGAZLMU\nNIuefpKVbnxMi46clbKnCtZ+Ht8CjC9yMyyb8GuziJHmQ7qFI54y6WZuB+EKv/pn\nQKojnsJQMEwNk1WJquZI+hepWa3okEBreFOmxeggEk/2IHNia6wxXWNm3u3OumGY\nD9ygmM7LndGl51UJfmlP3IgA2hV5C4NrtFH0bAECgYABLGBduyB+ysWkMFC4+aNh\nBy8H7yETf477bfjcOjqqiD6PWT3nJiWXaGvxlj42JFTpbiP9ol21dWb6PXJNcDE1\n6D0TyW+CTTSjPpu4kBLog3ajAtiZ8hzC+9j3Jr9Qn841fAeiwX5Jb90zY5xrbvxl\nnEY5X1/XlgYzxN0dpwRU9A==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-phkzf@coderhouse-f9da5.iam.gserviceaccount.com",
        "client_id": "101489244110108871599",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-phkzf%40coderhouse-f9da5.iam.gserviceaccount.com"
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