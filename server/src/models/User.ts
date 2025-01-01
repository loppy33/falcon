import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ 
    tableName: 'Users', 
    timestamps: false 
})  // Указываем имя таблицы и что нет автоматических меток времени
class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public walletAdress!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public firstName?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public lastname?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
    })
    public email?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public dob?: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public photo?: string;
}

export default User;
