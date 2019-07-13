const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadsSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

ThreadsSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Thread', ThreadsSchema);