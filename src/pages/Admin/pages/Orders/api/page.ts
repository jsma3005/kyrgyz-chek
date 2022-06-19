import axios from 'axios'
import { OrdersTypes } from '../types'

export const get = (id: string) => axios.get<OrdersTypes.Raw>(`/orders/${id}.json`)