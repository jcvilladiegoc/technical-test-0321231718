import { Injectable } from '@angular/core';
import { HotelDao } from '../../dao/hotel-dao';
import { Hotel } from 'src/app/models/hotel';
import { Pagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MockHotelService extends HotelDao {

  protected index: number = 0;

  constructor() {
    super();
  }

  override create(item: Hotel): Promise<Hotel> {
    return new Promise((resolve, reject) => {
      this.items.push(item);
      resolve(item);
    });
  }

  override getAll(): Promise<Hotel[]> {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    });
  }

  override get(id: string): Promise<Hotel> {
    return new Promise((resolve, reject) => {
      const hotel = this.items.find((currentHotel) => currentHotel.id === id);
      if (hotel) {
        resolve(hotel);
      } else {
        reject("The specified hotel was not found.");
      }
    });
  }

  override update(item: Hotel): Promise<Hotel> {
    return new Promise(async (resolve, reject) => {

      const itemOld = await this.get(item.id);

      if (itemOld) {

        itemOld.updated = new Date();
        itemOld.name = item.name;
        itemOld.description = item.description;
        itemOld.qualification = item.qualification;
        itemOld.removeAllRoom();
        itemOld.removeAllServices();

        item.getRooms().forEach((room) => {
          itemOld.addRoom(room);
        });

        item.getServices().forEach((service) => {
          itemOld.addService(service);
        });

        if (item.location) {
          itemOld.location = item.location;
        }

        resolve(itemOld);

      }

    });
  }

  override delete(id: string): Promise<Hotel> {
    return new Promise(async (resolve, reject) => {

      const item = await this.get(id);

      if (item) {
        this.items = this.items.filter((currentItem) => currentItem.id !== id);
        resolve(item);
      }

    });
  }

  override getItems(): Promise<Pagination<Hotel>> {
    return new Promise((resolve, reject) => {
      this.index = 0;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount = 1;
      this.disableNext = this.index + items.length < (this.items.length) ? false: true;
      this.disablePrev = false;
      const pagination: Pagination<Hotel> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override nextPage(): Promise<Pagination<Hotel>> {
    return new Promise((resolve, reject) => {
      this.index += this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount++;
      this.disableNext = this.index + items.length < (this.items.length) ? false : true;
      this.disablePrev = false;
      const pagination: Pagination<Hotel> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override prevPage(): Promise<Pagination<Hotel>> {
    return new Promise((resolve, reject) => {
      this.index -= this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount--;
      this.disableNext = false;
      this.disablePrev = this.paginationCount === 1;
      const pagination: Pagination<Hotel> = this.getPaginate(items);
      resolve(pagination);
    });
  }

}
