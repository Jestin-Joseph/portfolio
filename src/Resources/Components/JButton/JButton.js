import styles from './JButton.module.scss'

function JButton({buttonText, functionCall, classStyle }) {
  return (
    <button className={styles.jbutton_container} onClick={functionCall} style={classStyle && classStyle}>
        {buttonText}
    </button>
  )
}

export default JButton