import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AppointmentModule } from './modules/appointments/appointments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI), 
    UserModule,
    AppointmentModule,
  ],
})
export class AppModule {}








// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './modules/user/user.module';
// import { AppointmentModule } from './modules/appointments/appointments.module';

// @Module({
//   imports: [
//     // Load the .env file
//     ConfigModule.forRoot({
//       isGlobal: true, 
//     }),

//     // Configure Mongoose with the environment variable
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         uri: configService.get<string>('MONGO_URI'),
//       }),
//       inject: [ConfigService],
//     }),

//     // Other modules
//     UserModule,
//     AppointmentModule,
//   ],
// })
// export class AppModule {}




// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './modules/user/user.module';
// import { AppointmentModule } from './modules/appointments/appointments.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb+srv://kiran:kiran@cluster0.ylad3.mongodb.net/driving-school?retryWrites=true&w=majority&appName=Cluster0'),
//     UserModule,
//     AppointmentModule
//   ],
// })
// export class AppModule {}
