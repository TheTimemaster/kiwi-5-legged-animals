import axios from 'axios';
import React from 'react';
const __DEV__ = false;

const BASE = __DEV__ ? 'localhost:3000' : '';

export const AXIOS = axios.create({
    baseURL: BASE,
});
