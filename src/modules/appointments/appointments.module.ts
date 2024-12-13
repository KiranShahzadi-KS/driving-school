import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema,  } from './entities/appointment.entity';
import { AppointmentService } from './appointments.service';
import { AppointmentController } from './appointments.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }])],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
