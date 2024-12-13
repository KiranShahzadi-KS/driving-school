import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Appointment, AppointmentDocument } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
  ) {}

  // Create a new slot
  async createSlot(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const newSlot = new this.appointmentModel(createAppointmentDto);
    return newSlot.save();
  }

  // Get all slots
  async getAllSlots(): Promise<Appointment[]> {
    return this.appointmentModel.find({ isDeleted: false }).exec();
  }

  // Get a slot by ID
  async getSlotById(id: string): Promise<Appointment> {
    const slot = await this.appointmentModel.findById(id).exec();
    if (!slot) throw new NotFoundException('Slot not found');
    return slot;
  }

  // Update a slot
  async updateSlot(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    const updatedSlot = await this.appointmentModel.findByIdAndUpdate(
      id,
      updateAppointmentDto,
      { new: true },
    ).exec();
    if (!updatedSlot) throw new NotFoundException('Slot not found');
    return updatedSlot;
  }

  // Delete a slot
  async deleteSlot(id: string): Promise<{ message: string }> {
    const deletedSlot = await this.appointmentModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    ).exec();
    if (!deletedSlot) throw new NotFoundException('Slot not found');
    return { message: 'Slot deleted successfully' };
  }

  // Book a slot
  async bookSlot(slotId: string, userId: string): Promise<Appointment> {
    const slot = await this.appointmentModel.findById(slotId);
    if (!slot) throw new NotFoundException('Slot not found');
    if (slot.isBooked) throw new ConflictException('Slot is already booked');

    slot.isBooked = true;
    slot.bookedBy = new Types.ObjectId(userId);
    return slot.save();
  }

  // Book a slot by user
  async bookSlotByUser(slotId: string, userId: string): Promise<Appointment> {
    const slot = await this.appointmentModel.findById(slotId);
    if (!slot) throw new NotFoundException('Slot not found');
    if (slot.isBooked) throw new ConflictException('This slot is already booked by another user');

    slot.isBooked = true;
    slot.bookedBy = new Types.ObjectId(userId); 
    return slot.save();
  }
}
