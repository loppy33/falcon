import { useState } from 'react';
import './Profile.sass';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({
        username: 'Taras-Sh',
        firstName: 'Taras',
        lastname: 'Shevchenko',
        email: 'tarassheva2020@gmail.com',
        dob: '2000-01-01', // формат даты для input type="date"
        photo: '/images/icons/userProfile.svg' // начальное изображение
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState('');
    const [tempValue, setTempValue] = useState('');
    const [tempPhoto, setTempPhoto] = useState(null); // Для временного хранения изображения

    // Маппинг полей с их читабельными названиями
    const fieldNames = {
        username: 'Username',
        firstName: 'First Name',
        lastname: 'Last Name',
        email: 'Email',
        dob: 'Date of Birth',
        photo: 'Profile Photo'
    };

    const handleEditClick = (field) => {
        setFieldToEdit(field);
        if (field === 'photo') {
            setTempPhoto(userInfo.photo); // если редактируется фото
        } else {
            setTempValue(userInfo[field]); // если редактируется другое поле
        }
        setModalOpen(true);
    };

    const handleSave = () => {
        if (fieldToEdit === 'photo') {
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

    // Обработчик для загрузки фото
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setTempPhoto(reader.result); // Устанавливаем временное изображение
            };
            reader.readAsDataURL(file);
        }
    };

    // Модальное окно для редактирования информации
    const modalEdit = () => {
        return (
            <div className="modal">
                <div className="content">
                    <h2 className="section__name">
                        Edit {fieldNames[fieldToEdit]}
                        <img className="close" onClick={handleCancel} src="/images/icons/close.svg" alt="close" />
                    </h2>

                    {fieldToEdit === 'dob' ? (
                        // Поле для выбора даты рождения
                        <>
                            <label htmlFor="dob">
                                {fieldNames[fieldToEdit]}
                            </label>
                            <input
                                type="date"
                                className="action__input"
                                value={tempValue}
                                onChange={(e) => setTempValue(e.target.value)}
                            />
                        </>
                    ) : fieldToEdit === 'photo' ? (
                        // Поле для загрузки фото
                        <>
                            <label htmlFor="photo">
                                {fieldNames[fieldToEdit]}
                            </label>
                            <input type="file" className="action__input" onChange={handlePhotoChange} />

                        </>
                    ) : (
                        // Поле для ввода текста
                        <>
                            <label htmlFor={fieldToEdit}>
                                {fieldNames[fieldToEdit]}
                            </label>
                            <input
                                type="text"
                                className="action__input"
                                value={tempValue}
                                onChange={(e) => setTempValue(e.target.value)}
                            />

                        </>
                    )}

                    <button className="action__btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        );
    };

    return (
        <div className="Profile pageContainer pgf">
            <h2>Profile</h2>
            <div className="profile__container content">
                <div className='title bold'>
                    <img className='icons' src="/images/icons/personali.svg" alt="" /> Personal information
                </div>

                <div className="info__container">
                    {Object.keys(userInfo).map((field) => (
                        <div className="info__part" key={field}>
                            <div className="two__part">
                                <div className="part">{fieldNames[field]}</div>
                                <div className="part">
                                    {field === 'photo' ? (
                                        <img src={userInfo.photo} alt="Profile" className="avatar" />
                                    ) : (
                                        userInfo[field]
                                    )}
                                </div>
                            </div>
                            <button className='edit__btn' onClick={() => handleEditClick(field)}>
                                <img className='icons' src="/images/icons/edit.svg" alt="" /> Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && modalEdit()}
        </div>
    );
}
