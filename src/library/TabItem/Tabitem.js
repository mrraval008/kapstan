import styles from './TabItem.module.css'
export default function TabItem({title,icon,clickHandler,id,isActive}) {
    return (
        <div className={`${styles.tab_container} ${isActive && styles.active}`} onClick={()=>{clickHandler(id)}}>
            {icon}
            <span className={styles.item_title}>{title}</span>
        </div>
    )
}