import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cj4jt4s07spu5oeeab8g-a.singapore-postgres.render.com',
      port: 5432,
      username: 'ashwani',
      password: 'JqhtgtCvw81eZtCBfrzUMTkeEybfSGtl',
      database: 'crud',
      entities: [User],
      synchronize: true,
      ssl: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
