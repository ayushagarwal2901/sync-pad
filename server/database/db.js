import mongoose  from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const MONGO_URI = process.env.MONGO_URI

    try {
        await mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully🎉🎉');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;