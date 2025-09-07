// ملف إعدادات المثال - انسخه إلى config.js وعدل القيم
module.exports = {
    // إعدادات قاعدة البيانات
    database: {
        host: 'localhost',
        user: 'root',
        password: 'your_password',
        database: 'unitflow_db',
        port: 3306
    },
    
    // إعدادات الخادم
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    },
    
    // إعدادات الأمان
    security: {
        jwtSecret: 'your_jwt_secret_key_here',
        bcryptRounds: 10
    },
    
    // إعدادات CORS
    cors: {
        origin: '*',
        credentials: true
    }
};
