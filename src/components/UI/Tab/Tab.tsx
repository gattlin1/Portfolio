import React, { useState } from 'react';
import Card from '../Card/Card';
import './Tab.scss';

interface TabProps {
  title: string;
  tabs: { [tab: string]: JSX.Element | JSX.Element[] };
  style?: {};
}

const Tab = ({ title, tabs, style }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (tab: number) => {
    setCurrentTab(tab);
  };

  const tabIndices = Object.keys(tabs).map((tab, i) => (
    <button
      className={i === currentTab ? 'active' : ''}
      role='tab'
      key={i}
      tabIndex={i === currentTab ? 0 : -1}
      onClick={() => handleTabChange(i)}
    >
      <span>{tab}</span>
    </button>
  ));

  const tabPanels = Object.values(tabs).map((desc, i) => (
    <div
      className={'tab-panel'.concat(i === currentTab ? ' active' : '')}
      role='tabpanel'
      tabIndex={i === currentTab ? 0 : -1}
    >
      {desc}
    </div>
  ));

  return (
    <Card title={title} style={style} className='tab'>
      <div className='tab-list text-color-gray' role='tablist'>
        {tabIndices}
      </div>
      <div className='tab-panel-container'>{tabPanels}</div>
    </Card>
  );
};

export default Tab;
