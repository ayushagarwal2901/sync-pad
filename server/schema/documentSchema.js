import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const documentSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
});

const document = mongoose.model('document', documentSchema);

export default document;