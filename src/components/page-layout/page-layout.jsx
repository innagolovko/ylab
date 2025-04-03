import React from 'react';
import PropTypes from 'prop-types';
import './page-layout.css';
import {cn as bem} from '@bem-react/classname'; // Утилита для упрощения создания классов по БЭМ

 function PageLayout({ children }) {
  console.log('PageLayout');

  const cn = bem('PageLayout'); // Создаём базовый блок для утилиты

  return (
    <div className={cn()}>
      <div className={cn('center')}>
        {children}
      </div>
    </div>
  );
}

PageLayout.PropTypes = {
  children: PropTypes.node
};

export default React.memo(PageLayout);
