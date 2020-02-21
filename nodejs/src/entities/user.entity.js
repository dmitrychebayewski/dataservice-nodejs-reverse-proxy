import bcrypt from 'bcrypt-nodejs';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
class User {
  static create({ email, userId, password, firstName, lastName }) {
    const user = new User();
    user.email = email;
    user.userId = userId;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
    return user;
  }

  @PrimaryGeneratedColumn()
  id;

  @Column('text')
  userId;

  @Column('text')
  firstName;

  @Column('text')
  lastName;

  @Column('text')
  email;

  @Column({ type: 'text', readonly: true })
  password;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPwd() {
    this.password = await this.cryptPassword(this.password);
  }

  async cryptPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}

export default User;
