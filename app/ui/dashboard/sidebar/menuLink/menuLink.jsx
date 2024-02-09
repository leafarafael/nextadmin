"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item, disabled, hidden}) => {

  const pathname = usePathname()

  if (hidden) {
    return null; 
  }

  if (disabled) {
    return (
      <div className={`${styles.container} ${styles.disabled}`}>
        {item.icon}
        <span>{item.title}</span>
      </div>
    );
  }

  return (
    <Link href={item.path}>
      <div className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        <span>{item.title}</span>
      </div>
    </Link>
  );
};

export default MenuLink