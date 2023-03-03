import {color} from './theme';
export enum ScreenNames {
  Home = 'Home',
  Porfolio = 'Porfolio',
  Exchange = 'Exchange',
  History = 'History',
  Profile = 'Profile',
}
export const GraphData = [
  {
    id: 0,
    name: 'Property Name 1',
    price: '$3101.10',
    share: '1.1%',
    arrow: false,
    from: '#049C6B',
    to: '#049C6B',
  },
  {
    id: 1,
    name: 'Property Name 2',
    price: '$2133.10',
    share: '2.5%',
    arrow: true,
    from: '#F99F01',
    to: '#F99F01',
  },
  {
    id: 2,
    name: 'Property Name 3',
    price: '$2511.10',
    share: '1.7%',
    arrow: false,
    from: '#049C6B',
    to: '#049C6B',
  },
  {
    id: 3,
    name: 'Property Name 4',
    price: '$2100.10',
    share: '2.5%%',
    arrow: true,
    from: '#F99F01',
    to: '#F99F01',
  },
];
export const StaticData = [
  {
    id: 0,
    title: 'استثمار',
    price: 'SAR320.00',
    date: '24 November 2021',
    desc: 'ناجح',
  },
  {
    id: 1,
    title: 'ايداع',
    price: 'SAR320.00',
    date: '24 November 2021',
    desc: 'ناجح',
  },
  {
    id: 2,
    title: 'استثمار',
    price: 'SAR320.00',
    date: '24 November 2021',
    desc: 'ناجح',
  },
  {
    id: 3,
    title: 'استثمار',
    price: 'SAR 1,000.00',
    date: '24 November 2021',
    desc: 'فاشل',
  },
];
export const barChartData = [
  {
    id: 0,
    percentage: '42%',
    title: 'صندوق مؤشرات اوربا قيمة',
    color: color.primary,
  },
  {
    id: 1,
    percentage: '28%',
    title: 'صندوق تقنية امريكا',
    color: color.green,
  },
  {
    id: 2,
    percentage: '20%',
    title: 'صندوق البنوك امريكا',
    color: color.lightYellow,
  },
  {
    id: 3,
    percentage: '5%',
    title: 'صندوق الاسوق النامية',
    color: color.red,
  },
  {
    id: 4,
    percentage: '5%',
    title: 'صندوق امريكا الجنوبية',
    color: color.blue,
  },
];
export const ButtonsData = [
  {
    id: 0,
    name: 'أداء الاسبوع الماضي',
  },
  {
    id: 1,
    name: 'أداء الشهر الماضي',
  },
  {
    id: 2,
    name: 'أداء السنة الماضية',
  },
];
