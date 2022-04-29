import React, { useState } from 'react';
import Card from '../Card/Card';
import './Tab.scss';

interface TabProps {
  title: string;
  tabs: {
    [tab: string]: { title: string; description: JSX.Element | JSX.Element[] };
  };
  style?: {};
  className?: string;
}

const Tab = ({ title, tabs, style, className }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabClasses = ['tab'];
  if (className) tabClasses.push(...className.split(' '));

  const handleTabChange = (tab: number) => {
    setCurrentTab(tab);
  };

  const tabIndices = Object.values(tabs).map((tab, i) => (
    <button
      className={i === currentTab ? 'active' : ''}
      role='tab'
      key={i}
      tabIndex={i === currentTab ? 0 : -1}
      onClick={() => handleTabChange(i)}
    >
      <span>{tab.title}</span>
    </button>
  ));

  const tabPanels = Object.values(tabs).map((tab, i) => (
    <div
      className={'tab-panel'.concat(i === currentTab ? ' active' : '')}
      role='tabpanel'
      key={i}
      tabIndex={i === currentTab ? 0 : -1}
    >
      {tab.description}
    </div>
  ));

  return (
    <Card title={title} style={style} className={tabClasses.join(' ')}>
      <div className='tab-content'>
        <div className='tab-list text-color-gray' role='tablist'>
          {tabIndices}
        </div>
        <div className='tab-panel-container'>{tabPanels}</div>
      </div>
    </Card>
  );
};

export default Tab;
