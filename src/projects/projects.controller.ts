import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AddCategory } from './dto/add-category.dto';
import { AddList } from './dto/add-list.dto';

@Controller({ path: 'project' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get('getall')
  findAll() {
    return this.projectsService.findAll();
  }

  @Get('/by-userid/:id')
  getAllProjectByUserId(@Param('id') id: string) {
    return this.projectsService.getProjectByUserId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }

  @Post('add-category')
  addCategoryToProject(@Body() payload: AddCategory) {
    return this.projectsService.addCategoryToProject(payload);
  }

  @Post('add-list')
  addListToCategory(@Body() payload: AddList) {
    return this.projectsService.addList(payload);
  }
}
