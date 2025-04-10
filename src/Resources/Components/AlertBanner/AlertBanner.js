import styles from "./AlertBanner.module.scss"
import { CircleCheckBig } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
function AlertBanner({ message , type = "success", show, onClose }) {



    const icon = () => {
        switch (type) {
            case "success":
                return <CircleCheckBig color="#ffffff" />;
            case "error":
                return <CircleAlert color="#ffffff" />;
            default:
                return <CircleCheckBig color="#ffffff" />;
        }
    };

    return (
        show && (<div className={`${styles.AlertBanner_container} ${styles[type]}`}>
            {icon()}
            <p>{message}</p>
        </div>)
    )
}

export default AlertBanner