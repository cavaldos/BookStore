import { Model, Document, FilterQuery } from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(filter: FilterQuery<T>): Promise<T> {
    return this.model.findOne(filter).exec();
  }

  async findById(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
