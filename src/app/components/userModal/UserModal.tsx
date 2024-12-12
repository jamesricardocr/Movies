import style from './usermodal.module.scss'
import Image from 'next/image';
import human from '@/app/assets/img/human.png'
import arrow from '@/app/assets/img/svg/back_arrow.svg'
import FormUser from '../formUser/FormUser';

interface userMoodal {
    showModal: (newValue: boolean) => void;
}


const UserModal: React.FC<userMoodal> = ({ showModal }) => {
    return (
        <div className={style.modal}>
            <div className={style.forms}>
                <button
                    className={style.back}
                    onClick={() => showModal(false)}>
                    <Image width={24} height={24} alt='back arrow' src={arrow.src} />
                    Back
                </button>
                <FormUser />
            </div>
            <div className={style.info}>
                <h2>Welcome to Quickbet Movies!</h2>
                <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                <Image width={546} height={546} src={human.src} alt="" />
            </div>
        </div>
    )
}

export default UserModal