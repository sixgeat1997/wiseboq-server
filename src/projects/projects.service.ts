import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { AddCategory } from './dto/add-category.dto';
import { Category } from './entities/category.entity';
import { AddList } from './dto/add-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectDatabase: Repository<Project>,
    @InjectRepository(Category)
    private categoryDatabase: Repository<Category>,
    @InjectRepository(List)
    private listDatabase: Repository<List>,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    console.log({ createProjectDto });

    const newProject = this.projectDatabase.create({
      userId: createProjectDto.userId,
      name: createProjectDto.name,
    });

    return await this.projectDatabase.save(newProject);
  }

  async getProjectByUserId(userId: string) {
    console.log({ userId });

    const projects = await this.projectDatabase
      .createQueryBuilder('project')
      .where('project.user_id = :userId', { userId })
      .leftJoinAndSelect('project.categories', 'category')
      .leftJoinAndSelect('category.lists', 'list')
      .getMany();
    return projects;
  }

  async findAll() {
    const projects = await this.projectDatabase
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.categories', 'category')
      .leftJoinAndSelect('category.lists', 'list')
      .getMany();

    return projects;
  }

  async findOne(id: number) {
    const projects = await this.projectDatabase
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.categories', 'category')
      .where('project.id =:id', { id })
      .leftJoinAndSelect('category.lists', 'list')
      .getMany();
    return projects;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  async addCategoryToProject(data: AddCategory) {
    const project = await this.projectDatabase
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.categories', 'category')
      .where('project.id =:id', { id: data.projectId })
      .leftJoinAndSelect('category.lists', 'list')
      .getMany();

    const newCate = new Category();
    newCate.name = data.name;
    newCate.projectId = project[0].id;
    newCate.lists = [];
    project[0].categories = [...project[0].categories, newCate];

    return await this.projectDatabase.save(project);
  }

  async addList(data: AddList) {
    const category = await this.categoryDatabase.findOne({
      where: {
        id: data.categoryId,
      },
      relations: {
        lists: true,
      },
    });

    const newList = new List();
    newList.categoryId = data.categoryId;
    newList.cost = data.cost;
    newList.itemName = data.itemName;
    newList.price = '' + data.price;
    newList.quantity = data.quantity;
    newList.unit = data.unit;
    const indexList = category.lists.findIndex(
      (l) => l.itemName == data.itemName,
    );
    console.log(indexList);

    if (indexList > -1) {
      const item = category.lists[indexList];
      category.lists.splice(indexList, 1, {
        ...item,
        quantity: Number(item.quantity) + Number(data.quantity),
      });
    } else {
      category.lists.push(newList);
    }
    return await this.categoryDatabase.save(category);
  }

  async addListToCategory(data: AddList) {
    const category = await this.categoryDatabase.findOne({
      where: {
        id: data.categoryId,
      },
      relations: {
        lists: true,
      },
    });

    const newList = new List();
    newList.categoryId = data.categoryId;
    newList.cost = data.cost;
    newList.itemName = data.itemName;
    newList.price = '' + data.price;
    newList.quantity = data.quantity;
    newList.unit = data.unit;

    category.lists.push(newList);

    await this.categoryDatabase.save(category);

    const project = await this.findOne(category.projectId);

    return project;
  }
}
