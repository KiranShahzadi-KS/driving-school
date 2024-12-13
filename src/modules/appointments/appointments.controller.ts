import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { BookAppointmentDto } from './dto/book-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  createSlot(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.createSlot(createAppointmentDto);
  }

  @Get()
  getAllSlots() {
    return this.appointmentService.getAllSlots();
  }

  @Get(':id')
  getSlotById(@Param('id') id: string) {
    return this.appointmentService.getSlotById(id);
  }

  @Put(':id')
  updateSlot(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.updateSlot(id, updateAppointmentDto);
  }

  @Delete(':id')
  deleteSlot(@Param('id') id: string) {
    return this.appointmentService.deleteSlot(id);
  }

  @Post(':id/book')
  bookSlot(@Param('id') slotId: string, @Body() bookAppointmentDto: BookAppointmentDto) {
    const { userId } = bookAppointmentDto;
    return this.appointmentService.bookSlot(slotId, userId);
  }


  @Post(':id/bookSlot')
async bookSlotByUser(
  @Param('id') slotId: string,
  @Body() bookAppointmentDto: BookAppointmentDto,
) {
  const { userId } = bookAppointmentDto;
  return this.appointmentService.bookSlotByUser(slotId, userId);
}

}
