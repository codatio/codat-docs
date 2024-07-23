import React from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

import Navbar from '@theme/Navbar';

export default function DocRootLayoutMain({hiddenSidebarContainer, children}) {
  const sidebar = useDocsSidebar();

  return (
    <div className={styles.docMainWrapper}>
      <Navbar />
      <main
        className={clsx(
          styles.docMainContainer,
          (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
        )}>
        <div
          className={clsx(
            'container padding-bottom--lg',
            styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced,
          )}>
          {children}
        </div>
      </main>
    </div>
  );
}
