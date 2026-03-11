import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param, 
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    try {
      return this.tasksService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already aexists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const task = await this.tasksService.update(id, body);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }
}
