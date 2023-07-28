import React from 'react'
import { hydrate } from 'react-dom'
import { hydrateRoot } from 'react-dom/client';
// import CountUp from './CountUp'
import Iam from './Iam';

// hydrate(<CountUp />,document.querySelector('#app'));

const domNode = document.getElementById('app') as HTMLElement;
hydrateRoot(domNode,<Iam />);