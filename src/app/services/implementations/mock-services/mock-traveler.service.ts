import { Injectable } from '@angular/core';
import { TravelerDao } from '../../dao/traveler-dao';
import { Pagination } from 'src/app/models/pagination';
import { Traveler } from 'src/app/models/traveler';

@Injectable({
  providedIn: 'root'
})
export class MockTravelerService extends TravelerDao {

  protected index: number = 0;

  constructor() {
    super();
  }

  override create(item: Traveler): Promise<Traveler> {
    return new Promise((resolve, reject) => {
      this.items.push(item);
      resolve(item);
    });
  }

  override getAll(): Promise<Traveler[]> {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    });
  }

  override get(id: string): Promise<Traveler> {
    return new Promise((resolve, reject) => {
      const traveler = this.items.find((currentItem) => currentItem.id === id);
      if (traveler) {
        resolve(traveler);
      } else {
        reject("The specified traveler was not found.");
      }
    });
  }

  override update(item: Traveler): Promise<Traveler> {
    return new Promise(async (resolve, reject) => {

      const itemOld = await this.get(item.id);

      if (itemOld) {
        itemOld.name = item.name;
        itemOld.lastname = item.lastname;
        itemOld.documentType = item.documentType;
        itemOld.document = item.document;
        itemOld.phone = item.phone;
        itemOld.email = item.email;
      }

      resolve(itemOld);

    });
  }

  override delete(id: string): Promise<Traveler> {
    return new Promise(async (resolve, reject) => {

      const item = await this.get(id);

      if (item) {
        this.items = this.items.filter((currentItem) => currentItem.id !== item.id);
        resolve(item);
      }

    });
  }

  override getItems(): Promise<Pagination<Traveler>> {
    return new Promise((resolve, reject) => {
      this.index = 0;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount = 1;
      this.disableNext = this.index + items.length < (this.items.length) ? false: true;
      this.disablePrev = false;
      const pagination: Pagination<Traveler> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override nextPage(): Promise<Pagination<Traveler>> {
    return new Promise((resolve, reject) => {
      this.index += this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount++;
      this.disableNext = this.index + items.length < (this.items.length) ? false : true;
      this.disablePrev = false;
      const pagination: Pagination<Traveler> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override prevPage(): Promise<Pagination<Traveler>> {
    return new Promise((resolve, reject) => {
      this.index -= this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount--;
      this.disableNext = false;
      this.disablePrev = this.paginationCount === 1;
      const pagination: Pagination<Traveler> = this.getPaginate(items);
      resolve(pagination);
    });
  }

}
