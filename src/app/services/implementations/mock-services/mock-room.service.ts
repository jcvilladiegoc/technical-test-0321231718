import { Injectable } from '@angular/core';
import { RoomDao } from '../../dao/room-dao';
import { Pagination } from 'src/app/models/pagination';
import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root'
})
export class MockRoomService extends RoomDao {

  constructor() {
    super();
  }

  override create(item: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  override getAll(): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }

  override get(id: string): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  override update(item: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  override delete(id: string): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  override getItems(): Promise<Pagination<Room>> {
    throw new Error('Method not implemented.');
  }

  override nextPage(): Promise<Pagination<Room>> {
    throw new Error('Method not implemented.');
  }

  override prevPage(): Promise<Pagination<Room>> {
    throw new Error('Method not implemented.');
  }

}
