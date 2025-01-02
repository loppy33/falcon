import { useState } from 'react';
import './Profile.sass';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({
        username: 'username1234',
        firstName: '',
        lastname: '',
        email: '',
        dob: '',
        photo: ''
    });

    const [wallets, setWallets] = useState({
        EVM: null,
        SOL: null,
        TRX: null
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState('');
    const [tempValue, setTempValue] = useState('');
    const [tempPhoto, setTempPhoto] = useState(null);

    const fieldNames = {
        username: 'Username',
        firstName: 'First Name',
        lastname: 'Last Name',
        email: 'Email',
        dob: 'Date of Birth',
        photo: 'Profile Photo',
        EVM: 'EVM Wallet',
        SOL: 'SOL Wallet',
        TRX: 'TRX Wallet'
    };

    const handleEditClick = (field, isWallet = false) => {
        setFieldToEdit(field);
        if (isWallet) {
            setTempValue(wallets[field]);
        } else if (field === 'photo') {
            setTempPhoto(userInfo.photo); // Передаем текущее фото в tempPhoto
        } else {
            setTempValue(userInfo[field]);
        }
        setModalOpen(true);
    };

    const handleSave = () => {
        if (fieldToEdit in wallets) {
            setWallets({
                ...wallets,
                [fieldToEdit]: tempValue
            });
        } else if (fieldToEdit === 'photo' && tempPhoto) {
            setUserInfo({
                ...userInfo,
                photo: tempPhoto
            });
        } else {
            setUserInfo({
                ...userInfo,
                [fieldToEdit]: tempValue
            });
        }
        setModalOpen(false);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Получаем первый выбранный файл
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempPhoto(reader.result); // Устанавливаем photo в состояние tempPhoto
            };
            reader.readAsDataURL(file); // Преобразуем файл в строку Base64
        }
    };

    const modalEdit = () => (
        <div className="modal">
            <div className="content">
                <h2 className="section__name">
                    Edit {fieldNames[fieldToEdit]}
                    <img className="close" onClick={handleCancel} src="/images/icons/close.svg" alt="close" />
                </h2>
                <label htmlFor={fieldToEdit}>
                    {fieldNames[fieldToEdit]}
                </label>
                {fieldToEdit === 'photo' ? (
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange} // Обработчик загрузки фото
                        />
            
                    </div>
                ) : (
                    <input
                        type="text"
                        className="action__input"
                        value={tempValue || ''}
                        onChange={(e) => setTempValue(e.target.value)}
                    />
                )}
                <button className="action__btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );

    const renderValue = (value, isUsername = false) => {
        if (isUsername || value) {
            return value;
        }
        return <span className="not-set">Not set</span>;
    };

    return (
        <div className="Profile pageContainer pgf">
            <h2>Profile</h2>
            <div className="profile__container content">
                <div className="title bold">
                    <img className="icons" src="/images/icons/personali.svg" alt="" /> Personal information
                </div>
                <div className="info__container">
                    {Object.keys(userInfo).map((field) => (
                        <div className="info__part" key={field}>
                            <div className="two__part">
                                <div className="part">{fieldNames[field]}</div>
                                <div className="part">
                                    {field === 'photo' ? (
                                        userInfo.photo ? (
                                            <img src={userInfo.photo} alt="Profile" className="avatar" />
                                        ) : (
                                            <span className="not-set">Not set</span>
                                        )
                                    ) : (
                                        renderValue(userInfo[field], field === 'username')
                                    )}
                                </div>
                            </div>
                            <button className="edit__btn" onClick={() => handleEditClick(field)}>
                                <img className="icons" src="/images/icons/edit.svg" alt="" /> Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="profile__container content">
                <div className="title bold">
                    <img className="icons" src="/images/icons/profileWallet.svg" alt="" /> Your Wallets
                </div>
                <div className="info__container">
                    {Object.keys(wallets).map((wallet) => (
                        <div className="info__part" key={wallet}>
                            <div className="two__part">
                                <div className="part">{fieldNames[wallet]}</div>
                                <div className="part">
                                    {renderValue(wallets[wallet])}
                                </div>
                            </div>
                            <button className="edit__btn" onClick={() => handleEditClick(wallet, true)}>
                                <img className="icons" src="/images/icons/edit.svg" alt="" /> Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && modalEdit()}
        </div>
    );
}
