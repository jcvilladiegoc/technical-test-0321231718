import { Injectable } from '@angular/core';
import { TravelerDao } from '../../dao/traveler-dao';
import { Pagination } from 'src/app/models/pagination';
import { Traveler } from 'src/app/models/traveler';

@Injectable({
  providedIn: 'root'
})
export class MockTravelerService extends TravelerDao {

  constructor() {
    super();
  }

  override create(item: Traveler): Promise<Traveler> {
    throw new Error('Method not implemented.');
  }

  override getAll(): Promise<Traveler[]> {
    throw new Error('Method not implemented.');
  }

  override get(id: string): Promise<Traveler> {
    throw new Error('Method not implemented.');
  }

  override update(item: Traveler): Promise<Traveler> {
    throw new Error('Method not implemented.');
  }

  override delete(id: string): Promise<Traveler> {
    throw new Error('Method not implemented.');
  }

  override getItems(): Promise<Pagination<Traveler>> {
    throw new Error('Method not implemented.');
  }

  override nextPage(): Promise<Pagination<Traveler>> {
    throw new Error('Method not implemented.');
  }

  override prevPage(): Promise<Pagination<Traveler>> {
    throw new Error('Method not implemented.');
  }

}
