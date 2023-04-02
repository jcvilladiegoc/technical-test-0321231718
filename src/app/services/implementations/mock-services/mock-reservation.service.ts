import { Injectable } from '@angular/core';
import { ReservationDao } from '../../dao/reservation-dao';
import { Pagination } from 'src/app/models/pagination';
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class MockReservationService extends ReservationDao {

  constructor() {
    super();
  }

  override create(item: Reservation): Promise<Reservation> {
    throw new Error('Method not implemented.');
  }

  override getAll(): Promise<Reservation[]> {
    throw new Error('Method not implemented.');
  }

  override get(id: string): Promise<Reservation> {
    throw new Error('Method not implemented.');
  }

  override update(item: Reservation): Promise<Reservation> {
    throw new Error('Method not implemented.');
  }

  override delete(id: string): Promise<Reservation> {
    throw new Error('Method not implemented.');
  }

  override getItems(): Promise<Pagination<Reservation>> {
    throw new Error('Method not implemented.');
  }

  override nextPage(): Promise<Pagination<Reservation>> {
    throw new Error('Method not implemented.');
  }

  override prevPage(): Promise<Pagination<Reservation>> {
    throw new Error('Method not implemented.');
  }

}
