import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('MepProject', new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill name'
  }
}))