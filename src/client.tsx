import React from 'react'
import { hydrate } from 'react-dom'
import { hydrateRoot } from 'react-dom/client';
// import CountUp from './CountUp'
import Iam from './Iam';

// hydrate(<Iam />,document.querySelector('#app'));

const domNode = document.querySelector('#app')as HTMLElement;
hydrateRoot(domNode,<Iam />);