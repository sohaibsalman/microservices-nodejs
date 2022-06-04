import mongoose from 'mongoose';

// Interface representing the attributes required to create a new user
interface UserAttributes {
  email: string;
  password: string;
}

// Interace representing properties that a User Model has (User Collection)
interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

// Interface representing properties that a User Document has (single user)
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
