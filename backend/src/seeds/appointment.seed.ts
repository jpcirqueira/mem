import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Appointment from '../models/appointment/Appointment';

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Appointment)
            .values([
                {
                    date: '2021-01-11',
                },
                {
                    date: '2021-02-11',
                },
                {
                    date: '2021-03-11',
                },
            ])
            .execute();
    }
}
