import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'cockroachdb',
        host: configService.get('POSTGRES_HOST') || 'localhost',
        port: Number(configService.get('POSTGRES_PORT')) || 5555,
        username: configService.get('POSTGRES_USER') || 'wiseboq',
        password: configService.get('POSTGRES_PASSWORD') || '1234',
        database: configService.get('POSTGRES_DATABASE') || 'postgres',
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: ['dist/migrations/*.js'],
        synchronize: true,
        logging: false,
        ssl: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
