import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import User from '../models/user/User';

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                {
                    name: 'joao',
                    email: 'teste1',
                    phone: '992892893',
                    password: 'teste',
                },
                {
                    name: 'pedro',
                    email: 'teste2',
                    phone: '99289282923',
                    password: 'teste',
                },
            ])
            .execute();
    }
}
