import { Injectable } from '@angular/core';
import { LocationDao } from '../../dao/location-dao';
import { Location } from 'src/app/models/location';
import { Pagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MockLocationService extends LocationDao  {

  protected index: number = 0;

  constructor() {
    super();
  }

  override create(item: Location): Promise<Location> {
    return new Promise((reject, resolve) => {
      this.items.push(item);
      resolve(item);
    });
  }

  override getAll(): Promise<Location[]> {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    })
  }

  override get(id: string): Promise<Location> {
    return new Promise((resolve, reject) => {
      const location = this.items.find((currentHotel) => currentHotel.id === id);
      if (location) {
        resolve(location);
      } else {
        reject("The specified location was not found.");
      }
    });
  }

  override update(item: Location): Promise<Location> {
    return new Promise(async (resolve, reject) => {

      const itemOld = await this.get(item.id);

      if (itemOld) {
        itemOld.city = item.city;
        itemOld.state = item.state;
        itemOld.country = item.country;
      }

      resolve(itemOld);

    });
  }

  override delete(id: string): Promise<Location> {
    return new Promise(async (resolve, reject) => {

      const item = await this.get(id);

      if (item) {
        this.items = this.items.filter((currentItem) => currentItem.id !== item.id);
        resolve(item);
      }

    });
  }

  override getItems(): Promise<Pagination<Location>> {
    return new Promise((resolve, reject) => {
      this.index = 0;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount = 1;
      this.disableNext = this.index + items.length < (this.items.length) ? false: true;
      this.disablePrev = false;
      const pagination: Pagination<Location> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override nextPage(): Promise<Pagination<Location>> {
    return new Promise((resolve, reject) => {
      this.index += this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount++;
      this.disableNext = this.index + items.length < (this.items.length) ? false : true;
      this.disablePrev = false;
      const pagination: Pagination<Location> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override prevPage(): Promise<Pagination<Location>> {
    return new Promise((resolve, reject) => {
      this.index -= this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount--;
      this.disableNext = false;
      this.disablePrev = this.paginationCount === 1;
      const pagination: Pagination<Location> = this.getPaginate(items);
      resolve(pagination);
    });
  }

}
