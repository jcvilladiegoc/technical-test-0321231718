import { Injectable } from '@angular/core';
import { LocationDao } from '../../dao/location-dao';
import { Location } from 'src/app/models/location';
import { Pagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MockLocationService extends LocationDao  {

  constructor() {
    super();
  }

  override create(item: Location): Promise<Location> {
    throw new Error('Method not implemented.');
  }

  override getAll(): Promise<Location[]> {
    throw new Error('Method not implemented.');
  }

  override get(id: string): Promise<Location> {
    throw new Error('Method not implemented.');
  }

  override update(item: Location): Promise<Location> {
    throw new Error('Method not implemented.');
  }

  override delete(id: string): Promise<Location> {
    throw new Error('Method not implemented.');
  }

  override getItems(): Promise<Pagination<Location>> {
    throw new Error('Method not implemented.');
  }

  override nextPage(): Promise<Pagination<Location>> {
    throw new Error('Method not implemented.');
  }

  override prevPage(): Promise<Pagination<Location>> {
    throw new Error('Method not implemented.');
  }

}
