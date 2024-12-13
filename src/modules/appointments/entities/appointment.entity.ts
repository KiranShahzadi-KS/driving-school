import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Appointment {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  time: string;

  @Prop({ default: false })
  isBooked: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User', default: null })
  bookedBy: Types.ObjectId;

  @Prop({ default: false })
  isDeleted: boolean;
}

export type AppointmentDocument = Appointment & Document;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
