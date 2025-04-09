import styles from "./MainView.module.scss";
import me from "../../assets/image/me.jpg";

//components
import JButton from "../Components/JButton/JButton";
import ServicesCard from "../Components/ServicesCard/ServicesCard";
import WorkCard from "../Components/WorkCard/WorkCard";
import ContactForm from "../Components/ContactForm/ContactForm";

//data
import { services_given } from "../Data/services";
import { works } from "../Data/works";

//images
import nodeIcon from "../../assets/icons/original node.png";
import reactIcon from "../../assets/icons/original react.png";
import pyIcon from "../../assets/icons/original python.png";
import figIcon from "../../assets/icons/original figma.png";
import goIcon from "../../assets/icons/go.png"

function MainView() {

    return (
        <div className={styles.MainView_container}>
            <div className={styles.intro_container}>
                <button
                    className={styles.cvBtn}
                    onClick={
                        () => {
                            window.open('https://drive.google.com/file/d/18uvFF7k97drgRbhP_saTggAfaWMVv0pq/view?usp=drive_link', '_blank');
                        }}
                >
                    CV

                </button>
                <div className={styles.my_pic}>
                    <img src={me} alt="this is me" />
                </div>
                <span className={styles.name_intro_container}>

                    <div className={styles.name}>
                        <p>
                            Hello! I'm
                        </p>
                        <p className={styles.my_name}>
                            Jestin Joseph
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            I am <strong>Software Engineer</strong> from India, currently based in Chicago, United States
                        </p>
                    </div>
                    <span className={styles.talk_button}>
                        <JButton
                            buttonText={"Let's Talk"}
                            functionCall={() => {
                                const navigateTo = document.getElementById("contact-form");
                                if (navigateTo) {
                                    navigateTo.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        />
                    </span>
                </span>
            </div>
            <div className={styles.services_container}>

                <p className={styles.service_heading}>What do I do?</p>
                <div className={styles.services_list}>
                    {
                        services_given?.map((data, index) => {
                            return (
                                <ServicesCard
                                    key={data.id}
                                    icon={data.icon}
                                    title={data.title}
                                    desc={data.desc}
                                />
                            )
                        })
                    }

                </div>
            </div>
            <div className={styles.tools_container}>
                <p className={styles.tools_heading}>Tools used</p>
                <div className={styles.tools_list}>
                    <span className={styles.tool_logo}>
                        <img src={reactIcon} alt="icon" />
                    </span>
                    <span className={styles.tool_logo} style={{width:"4.8rem", height:"4.8rem"}}>
                        <img src={goIcon} alt="icon" />
                    </span>
                    <span className={styles.tool_logo}>
                        <img src={nodeIcon} alt="icon" />
                    </span>
                    <span className={styles.tool_logo}>
                        <img src={pyIcon} alt="icon" />
                    </span>
                    <span className={styles.tool_logo}>
                        <img src={figIcon} alt="icon" />
                    </span>
                    
                </div>
            </div>
            <div className={styles.works_container}>
                <p className={styles.works_heading}>My works</p>
                <div className={styles.works_list}>
                    {
                        works.map((work, index) => {
                            return (
                                <WorkCard
                                    key={work.id}
                                    number = {index+1}
                                    thumbnail={work.icon}
                                    title={work.title}
                                    desc={work.desc}
                                    date={work.date}
                                />
                            )
                        })
                    }

                </div>
            </div>
            <div id="contact-form" className={styles.contact_container}>
                <p className={styles.contact_heading}>Let's Talk!</p>
                <div className={styles.contact_form}>
                    <div className={styles.form}>

                        <ContactForm />
                    </div>
                    <hr className='solid' />
                    {/* <p className={styles.or}>OR</p> */}
                    <div className={styles.details}>
                        <p className={styles.details_heading}>Contact Me</p>
                        <div>
                            <p><strong>E-mail:</strong> jestinjoseph106@gmail.com</p>
                            <p><strong>Mobile:</strong> +1 (312)-371-1451</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.copyRights}> &copy; Copyright, 2024 Jestin Joseph</p>
        </div>
    )
}

export default MainView