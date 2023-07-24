import { Injectable } from '@nestjs/common';
import { IList, IProject } from './constant/mock';

@Injectable()
export class AppService {
  test: IProject[] = [
    {
      id: 1,
      userId: '1',
      name: 'โครงการ 1',
      categories: [
        {
          id: 1,
          name: 'cate1',
          projectId: '1',
          list: [
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      userId: '1',
      name: 'โครงการ 2',
      categories: [
        {
          id: 2,
          name: 'cate1',
          projectId: '1',
          list: [
            {
              id: '2',
              categoryId: '2',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      userId: '1',
      name: 'โครงการ 3',
      categories: [
        {
          id: 1,
          name: 'cate1',
          projectId: '1',
          list: [
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      userId: '1',
      name: 'โครงการ 4',
      categories: [
        {
          id: 1,
          name: 'cate1',
          projectId: '1',
          list: [
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      userId: '1',
      name: 'โครงการ 5',
      categories: [
        {
          id: 1,
          name: 'cate1',
          projectId: '1',
          list: [
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
            {
              id: '1',
              categoryId: '1',
              cost: 240,
              itemName: 'ไม่สัก',
              quantity: 10,
              unit: 'แผ่น',
              price: 10,
            },
          ],
        },
      ],
    },
  ];

  item: IList[] = [
    {
      categoryId: 'S-063',
      cost: 20,
      id: '1',
      itemName: 'เสาตอม่อคอนกรีต ขนาด 10 x 10 ซม. x 1.00 ม.',
      price: 195,
      quantity: 0,
      unit: 'ท่อน',
    },
    {
      categoryId: 'S-069',
      cost: 60,
      id: '2',
      itemName: 'เสาเข็มไม้ยูคาลิปตัส ขนาด Ø 3 นิ้ว x 3.00 ม.',
      price: 28,
      quantity: 0,
      unit: 'ต้น',
    },
    {
      categoryId: 'S-071',
      cost: 100,
      id: '3',
      itemName: 'เสาเข็มไม้ยูคาลิปตัส ขนาด Ø 5 นิ้ว x 5.00 ม.',
      price: 100,
      quantity: 0,
      unit: 'ท่อน',
    },
    {
      categoryId: 'S-063',
      cost: 398,
      id: '1',
      itemName: 'คอนกรีตหยาบ 1:3:5 (ประเภท1)',
      price: 1610,
      quantity: 0,
      unit: 'ลบ.ม.',
    },
    {
      categoryId: 'S-063',
      cost: 91,
      id: '1',
      itemName: 'ทรายหยาบรองพื้น',
      price: 495,
      quantity: 0,
      unit: 'ลบ.ม.',
    },
  ];
  getHello(): any {
    console.log('test get');

    return this.test;
  }

  getById(id: string) {
    return this.test.filter((item) => +item.id === +id);
  }

  getItem() {
    return this.item;
  }
}
