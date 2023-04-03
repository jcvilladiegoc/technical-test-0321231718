import { Injectable } from '@angular/core';
import { RoomDao } from '../../dao/room-dao';
import { Pagination } from 'src/app/models/pagination';
import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root'
})
export class MockRoomService extends RoomDao {

  protected index: number = 0;

  constructor() {
    super();
  }

  override create(item: Room): Promise<Room> {
    return new Promise((resolve, reject) => {
      this.items.push(item);
      resolve(item);
    })
  }

  override getAll(): Promise<Room[]> {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    });
  }

  override get(id: string): Promise<Room> {
    return new Promise((resolve, reject) => {
      const room = this.items.find((currentItem) => currentItem.id === id);
      if (room) {
        resolve(room);
      } else {
        reject("The specified room was not found.");
      }
    });
  }

  override update(item: Room): Promise<Room> {
    return new Promise(async (resolve, reject) => {

      const itemOld = await this.get(item.id);

      if (itemOld) {
        itemOld.roomNumber = item.roomNumber;
        itemOld.basisCost = item.basisCost;
        itemOld.tax = item.tax;
        itemOld.typeOfRoom = item.typeOfRoom;
        itemOld.location = item.location;
        itemOld.hotel = item.hotel;
      }

      resolve(itemOld);

    });
  }

  override delete(id: string): Promise<Room> {
    return new Promise(async (resolve, reject) => {

      const item = await this.get(id);

      if (item) {
        this.items = this.items.filter((currentItem) => currentItem.id !== item.id);
        resolve(item);
      }

    });
  }

  override getItems(): Promise<Pagination<Room>> {
    return new Promise((resolve, reject) => {
      this.index = 0;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount = 1;
      this.disableNext = this.index + items.length < (this.items.length) ? false: true;
      this.disablePrev = false;
      const pagination: Pagination<Room> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override nextPage(): Promise<Pagination<Room>> {
    return new Promise((resolve, reject) => {
      this.index += this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount++;
      this.disableNext = this.index + items.length < (this.items.length) ? false : true;
      this.disablePrev = false;
      const pagination: Pagination<Room> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override prevPage(): Promise<Pagination<Room>> {
    return new Promise((resolve, reject) => {
      this.index -= this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount--;
      this.disableNext = false;
      this.disablePrev = this.paginationCount === 1;
      const pagination: Pagination<Room> = this.getPaginate(items);
      resolve(pagination);
    });
  }

}
