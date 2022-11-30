#!/usr/bin/env node
/* eslint-disable no-console */

import sayHello from '../src/cli.js';
import parityCheck from './brain-even.js';
import calcGame from './brain-calc.js'

sayHello();
parityCheck();
calcGame();
