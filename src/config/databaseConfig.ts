import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
    try {
        const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
        await mongoose.connect(MONGODB_URI, {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the application if unable to connect to MongoDB
    }
};

export default connectToDatabase;
