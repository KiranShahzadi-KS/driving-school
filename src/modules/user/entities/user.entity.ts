import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  address: string;

  @Prop({enum: ['yes', 'no'] })
  drivingLicense: 'yes' | 'no';

  @Prop({enum: ['public', 'private'] })
  userType: 'public' | 'private';

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}



// Pre-save hook to convert email to lowercase
// UserSchema.pre('save', function (next) {
//   if (this.email) {
//     this.email = this.email.toLowerCase();
//   }
//   next();
// });



export const UserSchema = SchemaFactory.createForClass(User);

export type IUser = User & Document;
