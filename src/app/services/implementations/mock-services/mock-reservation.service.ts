import { Injectable } from '@angular/core';
import { ReservationDao } from '../../dao/reservation-dao';
import { Pagination } from 'src/app/models/pagination';
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class MockReservationService extends ReservationDao {

  protected index: number = 0;

  constructor() {
    super();
  }

  override create(item: Reservation): Promise<Reservation> {
    return new Promise((resolve, reject) => {
      this.items.push(item);
    });
  }

  override getAll(): Promise<Reservation[]> {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    })
  }

  override get(id: string): Promise<Reservation> {
    return new Promise((resolve, reject) => {
      const reservation = this.items.find((currentHotel) => currentHotel.id === id);
      if (reservation) {
        resolve(reservation);
      } else {
        reject("The specified reservation was not found.");
      }
    });
  }

  override update(item: Reservation): Promise<Reservation> {
    return new Promise(async (resolve, reject) => {

      const itemOld = await this.get(item.id);

      if (itemOld) {
        itemOld.room = item.room;
        itemOld.fromDate = item.fromDate;
        itemOld.toDate = item.toDate;
        itemOld.paid = item.paid;
        itemOld.traveler = item.traveler;
      }

      resolve(itemOld);

    });
  }

  override delete(id: string): Promise<Reservation> {
    return new Promise(async (resolve, reject) => {

      const item = await this.get(id);

      if (item) {
        this.items = this.items.filter((currentItem) => currentItem.id !== item.id);
        resolve(item);
      }

    });
  }

  override getItems(): Promise<Pagination<Reservation>> {
    return new Promise((resolve, reject) => {
      this.index = 0;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount = 1;
      this.disableNext = this.index + items.length < (this.items.length) ? false: true;
      this.disablePrev = false;
      const pagination: Pagination<Reservation> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override nextPage(): Promise<Pagination<Reservation>> {
    return new Promise((resolve, reject) => {
      this.index += this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount++;
      this.disableNext = this.index + items.length < (this.items.length) ? false : true;
      this.disablePrev = false;
      const pagination: Pagination<Reservation> = this.getPaginate(items);
      resolve(pagination);
    });
  }

  override prevPage(): Promise<Pagination<Reservation>> {
    return new Promise((resolve, reject) => {
      this.index -= this.pageSize;
      const items = this.items.slice(this.index, (this.index + this.pageSize));
      this.paginationCount--;
      this.disableNext = false;
      this.disablePrev = this.paginationCount === 1;
      const pagination: Pagination<Reservation> = this.getPaginate(items);
      resolve(pagination);
    });
  }

}
